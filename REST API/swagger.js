const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "idk",
        "description": "Assignment #1: gRPC and REST API Implementation by idk",
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
        }
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [
        {
            "name": "Books",
            "description": "API for books"
        }
    ],
    "paths": {
        "/book/list": {
            "get": {
                "tags": [
                    "Books"
                ],
                "summary": "Get all books in the system",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Book"
                        }
                    }
                }
            }
        },
        "/book/:bookId": {
            "get": {
                "tags": [
                    "Books"
                ],
                "summary": "Get book in the system by its id",
                "parameters": [
                    {
                        "name" : "id",
                        "description" : "Book id",
                        "required" : true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Book"
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete a book with given ID",
                "tags": [
                    "Books"
                ],
                "responses": {
                    "200": {
                        "description": "Book is deleted"
                    }
                }
            }
        },
        "/book/insert": {
            "post": {
                "tags": [
                    "Books"
                ],
                "summary": "Insert new book",
                "parameters" : [
                    {
                        "name": "book",
                        "in": "body",
                        "description": "Book that we want to insert",
                        "schema": {
                            "$ref": "#/definitions/Book"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "New book is inserted"
                    }
                }
            }
        }
    },
    "definitions": {
        "Book": {
            "required": [
                "id",
                "title",
                "author"
            ],
            "properties": {
                "id": {
                    "type": "integer"
                },
                "title": {
                    "type": "string"
                },
                "author": {
                    "type": "string"
                }
            }
        }
    },
    "schemes": [
            "http"
        ],
        "consumes": [
            "application/json"
        ],
        "produces": [
            "application/json"
    ]
}

export default swaggerDocument;