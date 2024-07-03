import json
import requests


def generate_openapi_spec(schemas):
    openapi_spec = {
        "openapi": "3.1.0",
        "info": {
            "title": "IGVF Project API",
            "version": "0.1.0"
        },
        "paths": {
            "/search": {
                "get": {
                    "summary": "Search for objects in the IGVF Project",
                    "description": "Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.",
                    "operationId": "search",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "Successful response",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {
                                            "@graph": {
                                                "type": "array",
                                                "items": {
                                                    "oneOf": []
                                                }
                                            },
                                            "@id": {"type": "string"},
                                            "@type": {
                                                "type": "array",
                                                "items": {"type": "string"}
                                            },
                                            "total": {"type": "integer"},
                                            "facets": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "field": {"type": "string"},
                                                        "title": {"type": "string"},
                                                        "terms": {
                                                            "type": "array",
                                                            "items": {
                                                                "type": "object",
                                                                "properties": {
                                                                    "key": {"type": "string"},
                                                                    "doc_count": {"type": "integer"}
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "components": {
            "schemas": {}
        }
    }

    OPTIONAL_PARAMS = [
        'datastore',
        'debug',
        'field',
        'format',
        'frame',
        'from',
        'limit',
        'mode',
        'sort',
        'type',
        'config',
    ]

    FREE_TEXT_QUERIES = [
        'advancedQuery',
        'query',
    ]

    RESERVED_KEYS = OPTIONAL_PARAMS + FREE_TEXT_QUERIES

    # Define the parameters
    parameters = [
        {
            "name": "debug",
            "in": "query",
            "schema": {"type": "boolean"},
            "description": "Enables debug mode for the search."
        },
        {
            "name": "field",
            "in": "query",
            "schema": {"type": "array", "items": {"type": "string"}},
            "style": "form",
            "explode": True,
            "description": "Fields to include in the response. Can be repeated for multiple fields."
        },
        {
            "name": "frame",
            "in": "query",
            "schema": {"type": "string", "enum": ["object", "embedded"]},
            "description": "Specifies the format of the returned objects."
        },
        {
            "name": "from",
            "in": "query",
            "schema": {"type": "integer"},
            "description": "Starting index for pagination."
        },
        {
            "name": "limit",
            "in": "query",
            "schema": {"type": "string"},
            "description": "Maximum number of results to return. Use 'all' for all results."
        },
        {
            "name": "mode",
            "in": "query",
            "schema": {"type": "string"},
            "description": "Specifies the search mode."
        },
        {
            "name": "sort",
            "in": "query",
            "schema": {"type": "array", "items": {"type": "string"}},
            "style": "form",
            "explode": True,
            "description": "Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields."
        },
        {
            "name": "type",
            "in": "query",
            "schema": {"type": "array", "items": {"type": "string"}},
            "style": "form",
            "explode": True,
            "description": "Type of objects to return. Can be repeated for multiple types."
        },
        {
            "name": "config",
            "in": "query",
            "schema": {"type": "string"},
            "description": "Configuration options for the search."
        },
        {
            "name": "advancedQuery",
            "in": "query",
            "schema": {"type": "string"},
            "description": "Advanced query string for complex searches."
        },
        {
            "name": "query",
            "in": "query",
            "schema": {"type": "string"},
            "description": "Query string for searching."
        }
    ]

    # Add these parameters to the search endpoint
    openapi_spec["paths"]["/search"]["get"]["parameters"].extend(parameters)

    # Add a note about dynamic field filters
    field_filter_note = {
        "name": "field_filters",
        "in": "query",
        "schema": {"type": "object"},
        "description": "Any field from any object type can be used as a filter. Use '!=' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields."
    }
    openapi_spec["paths"]["/search"]["get"]["parameters"].append(field_filter_note)


    search_description = openapi_spec["paths"]["/search"]["get"]["description"]
    search_description += f"\n\nReserved query parameters: {', '.join(RESERVED_KEYS)}"
    search_description += "\nThese parameters have special meanings and cannot be used as field names for filtering."

    # Add all schemas to components/schemas and refs to @graph items
    for schema_name, schema in schemas.items():
        openapi_spec["components"]["schemas"][schema_name] = schema
        openapi_spec["paths"]["/search"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["properties"]["@graph"]["items"]["oneOf"].append(
            {"$ref": f"#/components/schemas/{schema_name}"}
        )

    # Add an example that demonstrates expanded parameters
    complex_example = {
        "summary": "Complex search with multiple parameters",
        "description": "Search for experiments, sort by multiple fields, and specify multiple types",
        "value": {
            "type": ["Experiment", "Dataset"],
            "assay_title": "ChIP-seq",
            "target.label": "CTCF",
            "biosample_ontology.organ_slims": "brain",
            "status": "released",
            "lab.name": "john-stamatoyannopoulos",
            "sort": ["-date_created", "@id"],
            "field": ["@id", "accession", "description", "assay_title", "biosample_ontology.term_name"],
            "from": "25",
            "limit": "25",
            "format": "json",
            "frame": "object"
        }
    }
  #  openapi_spec["paths"]["/search"]["get"]["examples"] = [complex_example]

    return openapi_spec

res = requests.get('https://api.data.igvf.org/profiles').json()

subtypes = res['_subtypes']

schemas = {
    k: v for
    k, v in res.items()
    if not k.startswith('_') and not k.startswith('@')
}


def clean_schema(schema):
        valid_attrs = [
            "type", "properties", "required", "additionalProperties",
            "items", "allOf", "anyOf", "oneOf", "not", "enum",
            "const", "multipleOf", "maximum", "exclusiveMaximum",
            "minimum", "exclusiveMinimum", "maxLength", "minLength",
            "pattern", "maxItems", "minItems", "uniqueItems",
            "maxContains", "minContains", "maxProperties", "minProperties",
            "format", "default", "title", "description", "linkTo",
        ]
        cleaned = {}
        for key, value in schema.items():
#           print(key, value)
            if key in valid_attrs:
                if key == "properties":
                    cleaned[key] = {k: clean_schema(v) for k, v in value.items()}
                elif key == 'type':
                    if isinstance(value, list):
                        if 'linkFrom' not in schema:
                            print('multiple types', key, value, schema)
                            print('setting type string')
                            cleaned['type'] = 'string'
                    elif 'linkFrom' in schema:
                        cleaned['type'] = 'string'
                    else:
                        cleaned[key] = value
                elif key == 'linkTo':
                    if isinstance(value, str):
                        value = [value]
                    resolved_subtypes = set()
                    for v in value:
                        resolved_subtypes.update(subtypes[v])
                    value = list(sorted(resolved_subtypes))
                    res = [
                        {
                            '$ref': f"#/components/schemas/{v}",
                        }
                        for v in value
                    ]
                    res.append({'type': 'string'})
                    cleaned = {}
                    cleaned['oneOf'] = res
                    return cleaned
                elif key == "required" and not isinstance(value, list):
                    cleaned[key] = list(value)  # Convert to list if it's not already
                elif isinstance(value, dict):
                    cleaned[key] = clean_schema(value)
                else:
                    cleaned[key] = value
        return cleaned

schemas = {
    k: clean_schema(v)
    for k, v in schemas.items()
}

#print(json.dumps(schemas, indent=4))

openapi_spec = generate_openapi_spec(schemas)


with open('api_spec.json', 'w') as f:
    json.dump(openapi_spec, f, indent=2)


print("OpenAPI specification has been generated and saved to 'api_spec.json'")
