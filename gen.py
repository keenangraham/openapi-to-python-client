import json
import requests


def generate_openapi_spec(schemas):
    openapi_spec = {
        "openapi": "3.0.0",
        "info": {
            "title": "IGVF Project API",
            "version": "0.1.0"
        },
        "paths": {
            "/search": {
                "get": {
                    "summary": "Search for objects in the IGVF Project",
                    "description": "Search endpoint that accepts various query parameters to filter and format results. Supports complex filtering on types and fields within JSON objects.",
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
        'searchTerm',
        'query',
    ]

    RESERVED_KEYS = OPTIONAL_PARAMS + FREE_TEXT_QUERIES

    # Define the parameters
    parameters = [
        {
            "name": "datastore",
            "in": "query",
            "schema": {"type": "string"},
            "description": "Specifies the datastore to search in."
        },
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
            "name": "format",
            "in": "query",
            "schema": {"type": "string", "enum": ["json", "html"]},
            "description": "Response format. Use 'json' for machine-readable response."
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
            "name": "searchTerm",
            "in": "query",
            "schema": {"type": "string"},
            "description": "General search term that can return multiple object types."
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

    # Update the description to mention reserved keys
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
    openapi_spec["paths"]["/search"]["get"]["examples"] = [complex_example]

    return openapi_spec

r = requests.get('https://api.data.igvf.org/profiles').json()
nfr = {}
for k, v in r.items():
    if k.startswith('_') or k.startswith('@'):
        continue
    new_v = {}
    for x, y in v.items():
        if x == 'properties' or x == 'type':
            new_v[x] = y
    nfr[k] = new_v
schemas = nfr


openapi_spec = generate_openapi_spec(schemas)

# Write the OpenAPI spec to a file
with open('api_spec.json', 'w') as f:
    json.dump(openapi_spec, f, indent=2)

print("OpenAPI specification has been generated and saved to 'api_spec.json'")
