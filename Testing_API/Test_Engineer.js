{
	"info": {
		"_postman_id": "32399f4d-e13c-40f0-b8a4-d4ceee4cd2bd",
		"name": "Test_Engineer",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "User Detail",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"  pm.response.to.have.status(200);\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://gorest.co.in/public/v2/todos?status=completed",
					"protocol": "https",
					"host": [
						"gorest",
						"co",
						"in"
					],
					"path": [
						"public",
						"v2",
						"todos"
					],
					"query": [
						{
							"key": "status",
							"value": "completed"
						}
					]
				}
			},
			"response": []
		}
	]
}