const {Router} = require('express')
const routes = new Router(); 
const EmployeeController = require('../controllers/EmployeeController')
const employee = new EmployeeController();

module.exports = app => {
    
    routes.get('/', (req, res)=>{res.send({message:'Hola Mundo'})});
    routes.get('/api/employee/all', employee.all);
    routes.post('/api/employee/create', employee.create);
    routes.get('/api/employee/show/:id', employee.show);
    routes.put('/api/employee/update/:id',  employee.update);
    routes.delete('/api/employee/delete/:id',  employee.delete);
    app.use(routes);
}

