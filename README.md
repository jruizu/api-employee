# Employees - NodeJS [BACK]

### Tecnologías

Employees - NodeJS [BACK] usa varios proyectos de código abierto para funcionar correctamente:

* [express](http://expressjs.com/) - Framework utilizado para el manejo de las rutas y middleware.

* [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar opciones de conexión a la servidor (Su uso es opcional).
* [sequelize](hhttps://sequelize.org/master/) - ORM para uso de consultas y crear colecciones en MYSQL

* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta de desarrollo reinicia automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.


### Instalación

Employee - NodeJS [BACK] requiere [Node.js](https://nodejs.org/) v10.4 + para ejecutarse.

Clonar Repositorio
```sh
$ git clone https://github.com/yoisert/api-employee.git
```

Levantar base de datos MYSQL
```sh
$ docker-compose up --build  
```

Instale las dependencias y devDependencies e inicie el servidor.
```sh
$ cd api-employee
$ npm install 
$ npm run start
```
Iniciar servidor con con [nodemon](https://www.npmjs.com/package/nodemon)
```sh
$ npm install nodemon -D 
$ npm run start-dev
```
Iniciar Pruebas
```sh
$ npm run test
```
Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.
```sh
127.0.0.1:3000 || http://localhost:3000
```

### Información adicional

1 Obtener Employees list
```JOSN
    GET /employees/all
```
* Res: {status}: 400, 404, 500, 200

1.1 Respuesta
```JSON
    STATUS 200
      {
        "message": "List Employees Successfuly",
        "data": [
                {
                "id": 31,
                "name": "Juan 3",
                "identification": "1234567",
                "boss_id": null,
                "_function": "dev",
                "createdAt": "2021-02-01T03:54:37.000Z",
                "updatedAt": "2021-02-01T03:54:37.000Z",
                "deletedAt": null,
                "boss": null,
                "subordinate": []
                },
                {
                "id": 36,
                "name": "Jose Ruiz.",
                "identification": "1063177896",
                "boss_id": null,
                "_function": "Desarrollador",
                "createdAt": "2021-02-01T04:25:44.000Z",
                "updatedAt": "2021-02-01T04:30:04.000Z",
                "deletedAt": null,
                "boss": null,
                "subordinate": []
                }
            ]
     }
```

1 Obtener Empleado por id
```JOSN
    GET /api/employee/show/:id
```
* Res: {status}: 400, 404, 500, 200

1.1 Respuesta
```JSON
    STATUS 200
        {
            "message": "Read Employee Successfuly",
            "data": {
                "id": 36,
                "name": "Jose Ruiz.",
                "identification": "1063177896",
                "boss_id": null,
                "_function": "Desarrollador",
                "createdAt": "2021-02-01T04:25:44.000Z",
                "updatedAt": "2021-02-01T04:30:04.000Z",
                "deletedAt": null,
                "boss": null,
                "subordinate": []
            }
        }
```
* Param: {id}: Debe ser tipo number

3 Crea un nuevo Empleado
```JSON
    POST /api/employee/create 
    {
        "name":"Jose Ruiz",
        "identification":"1063177896",
        "boss_id":null, 
        "_function":"Desarrollador"
    }   
```
* Req: {name,identification, _function}: Debe ser tipo cadena 

3.1 Respuesta
```JSON
    STATUS 200
     {
        "message": "Create Employee Successfuly",
        "data": {
            "id": 1,
            "name": "Jose Ruiz",
            "identification": "1063177896",
            "boss_id": null,
            "_function": "Desarrollador",
            "updatedAt": "2021-02-01T04:25:44.851Z",
            "createdAt": "2021-02-01T04:25:44.851Z"
        }
    }
```
* Res: {status}: 400, 422, 409, 500, 200

4 Actualizar Empleado
```JSON
    PUT /api/employee/:id 
   {
        "name":"Jose Ruiz U.",
        "identification":"1063177896",
        "boss_id":null, 
        "_function":"Desarrollador"
    }   
```
* Req: {id}: Debe ser number


4.1 Respuesta
```JSON
    STATUS 200
    {
     "message": "Update Employe Successfuly"
    }
```
* Res: {status}: 400, 422, 409, 500, 200


5 Eliminar Empleado
```JSON
    DELETE /api/employee/delete/:id
```
5.1 Respuesta
```JSON
    STATUS 200
    {
        "message": "Delete Employee Successfuly",
        "data": null
    }
```
* Res: {status}: 400, 422, 409, 500, 200

Autor: Jose Ruiz Urango
----
**Software Libre!**