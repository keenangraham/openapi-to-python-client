import json
import requests


def generate_openapi_spec(schemas):
    openapi_spec = {
        "openapi": "3.1.0",
        "info": {
            "title": "IGVF Project API",
            "version": "0.1.0"
        },
        "servers": [
            {
                "url": "https://api.data.igvf.org"
            }
        ],
        "paths": {
            "/{resource_id}": {
                "get": {
                    "summary": "Get item information",
                    "description": "Retrieve detailed information about a specific item using its @id or uuid.",
                    "operationId": "get_by_id",
                    "parameters": [
                        {
                            "name": "resource_id",
                            "in": "path",
                            "required": True,
                            "schema": {
                                "type": "string"
                            },
                            "description": "The unique identifier for the resource (e.g., /sequence-files/IGVFFI1165AJSO/ or fffcd64e-af02-4675-8953-7352459ee06a) "
                        },
                        {
                            "name": "frame",
                            "in": "query",
                            "required": True,
                            "schema": {
                                "type": "string",
                                "enum": ["object"]
                            },
                            "description": "Constant value, do not set."
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Successful response",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "title": "Item",
                                        "oneOf": [],
                                        "discriminator": {
                                            "propertyName": "@type",
                                            "mapping": {}
                                        },
                                    }
                                }
                            }
                        },
                        "404": {
                            "description": "Object not found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/search": {
                "get": {
                    "summary": "Search for items in the IGVF Project",
                    "description": "Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.",
                    "operationId": "search",
                    "parameters": [
                         {
                             "name": "type",
                             "in": "query",
                             "schema": {"type": "array", "items": {"type": "string"}},
                             "style": "form",
                             "explode": True,
                             "description": "Type of objects to return. Can be repeated for multiple types."
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
                            "name": "query",
                            "in": "query",
                            "schema": {"type": "string"},
                            "description": "Query string for searching."
                        },
                        {
                            "name": "limit",
                            "in": "query",
                            "schema": {"type": "integer"},
                            "description": "Maximum number of results to return. Use 'all' for all results."
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
                            "name": "frame",
                            "in": "query",
                            "required": True,
                            "schema": {
                                "type": "string",
                                "enum": ["object"]
                            },
                            "description": "Constant value, do not set."
                        },
                        {
                            "name": "field_filters",
                            "in": "query",
                            "schema": {
                                "type": "object"
                            },
                            "description": "Any field from any object type can be used as a filter. Use '!=' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields.",
                            "style": "form",
                            "explode": True,
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Successful response",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "title": "SearchResults",
                                        "properties": {
                                            "@graph": {
                                                "type": "array",
                                                "items": {
                                                    "title": "SearchResultItem",
                                                    "oneOf": [],
                                                    "discriminator": {
                                                        "propertyName": "@type",
                                                        "mapping": {}
                                                    },
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
                                                    "title": "SearchFacet",
                                                    "properties": {
                                                        "field": {"type": "string"},
                                                        "title": {"type": "string"},
                                                        "terms": {
                                                            "type": "array",
                                                            "items": {
                                                                "title": "SearchFacetTermValue",
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
                            },
                        },
                        "404": {
                            "description": "No results found",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/NoResultsResponse"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/profiles": {
                "get": {
                    "summary": "Retrieve JSON schemas for all item types",
                    "description": "Returns JSON schemas of all the item types defined in IGVF",
                    'operationId': 'get_schemas',
                    "responses": {
                        "200": {
                            "description": "Successful response",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/JSONSchema"
                                    }
                                }
                            }
                        }
                    }
                }
            },
             "/profiles/{item_type}": {
                "get": {
                    "summary": "Retrieve JSON schemas for all item types",
                    "description": "Returns JSON schemas of all the item types defined in IGVF",
                    'operationId': 'get_schema_for_item_type',
                    'parameters': [
                        {
                            "name": "item_type",
                            "in": "path",
                            "required": True,
                            "schema": {
                                "$ref": "#/components/schemas/ItemType"
                            },
                            "description": "The name of the item type"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Successful response",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "$ref": "#/components/schemas/JSONSchema"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "components": {
            "schemas": {
                "ItemType": {
                    "type": "string",
                    "enum": [],
                },
                "JSONSchema": {
                    "type": "object",
                    "description": "A JSON Schema object"
                },
                "NoResultsResponse": {
                    "type": "object",
                    "properties": {
                        "@context": {
                            "type": "string"
                        },
                        "@graph": {
                            "type": "array",
                            "items": {}
                        },
                        "@id": {
                            "type": "string"
                        },
                        "@type": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "clear_filters": {
                            "type": "string"
                        },
                        "columns": {
                            "type": "object",
                            "additionalProperties": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "facet_groups": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string"
                                    },
                                    "title": {
                                        "type": "string"
                                    },
                                    "facet_fields": {
                                        "type": "array",
                                        "items": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "facets": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "field": {
                                        "type": "string"
                                    },
                                    "title": {
                                        "type": "string"
                                    },
                                    "terms": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "key": {
                                                    "type": "string"
                                                },
                                                "doc_count": {
                                                    "type": "integer"
                                                }
                                            }
                                        }
                                    },
                                    "total": {
                                        "type": "integer"
                                    },
                                    "type": {
                                        "type": "string"
                                    },
                                    "appended": {
                                        "type": "boolean"
                                    },
                                    "open_on_load": {
                                        "type": "boolean"
                                    }
                                }
                            }
                        },
                        "filters": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "field": {
                                        "type": "string"
                                    },
                                    "term": {
                                        "type": "string"
                                    },
                                    "remove": {
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "notification": {
                            "type": "string"
                        },
                        "sort": {
                            "type": "object",
                            "additionalProperties": {
                                "type": "object",
                                "properties": {
                                    "order": {
                                        "type": "string"
                                    },
                                    "unmapped_type": {
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "title": {
                            "type": "string"
                        },
                        "total": {
                            "type": "integer"
                        }
                    }
                }
            },
            "securitySchemes": {
                "basicAuth": {
                    "type": "http",
                    "scheme": "basic"
                }
            },
        },
        "security": [
            {},
            {"basicAuth": []}
        ]
    }

    RESERVED_KEYS = [
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
        'advancedQuery',
        'query',
    ]

    search_description = openapi_spec["paths"]["/search"]["get"]["description"]
    search_description += f"\n\nReserved query parameters: {', '.join(RESERVED_KEYS)}"
    search_description += "\nThese parameters have special meanings and cannot be used as field names for filtering."

    # Add all schemas to components/schemas and refs to @graph items
    for schema_name, schema in schemas.items():
        openapi_spec["components"]["schemas"][schema_name] = schema
        openapi_spec["paths"]["/{resource_id}"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["oneOf"].append(
            {"$ref": f"#/components/schemas/{schema_name}"}
        )
        openapi_spec["paths"]["/search"]["get"]["responses"]["200"]["content"]["application/json"]["schema"]["properties"]["@graph"]["items"]["oneOf"].append(
            {"$ref": f"#/components/schemas/{schema_name}"}
        )
        openapi_spec["components"]["schemas"]["ItemType"]["enum"].append(schema_name)

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
            "pattern", "uniqueItems",
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
                    cleaned['type'] = 'string'
                    continue
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
                    cleaned = {}
                    res.append({'type': 'string'})
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


for k in schemas.keys():
    if 'required' in schemas[k]:
        del schemas[k]['required']


#print(json.dumps(schemas, indent=4))

openapi_spec = generate_openapi_spec(schemas)


with open('api_spec.json', 'w') as f:
    json.dump(openapi_spec, f, indent=2)


print("OpenAPI specification has been generated and saved to 'api_spec.json'")
