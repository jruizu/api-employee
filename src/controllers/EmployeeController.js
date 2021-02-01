/*
    Constrolador EmployeeController
    Realiza todas las peticiones de un CRUD mediante a su modelo
    Employee 
*/
//Importamos el Modelo
const Employee = require('../database/models/Employee')


class EmployeeController{
    //Listar todos los empleados
    async all(req, res){
        try {
            const response = await Employee.findAll({include: [
                { model: Employee, as: 'boss' }, 
                { model: Employee, as: 'subordinate' }, 
        ],})
            return res.status(200).json({ message: 'List Employees Successfuly', data: response });
        } catch (error) {
            return res.status(500).json({message:'Error'})
        }
    }
    //Crear un empleado
    async create(req, res){
        const {...employee} = req.body
            try {
                const response = await  Employee.create(employee)
                return res.json({ message: 'Create Employee Successfuly', data: response });
            } catch (error) {
                if(error.errors[0].type=='unique violation') return res.status(400).json({message:'Employee is already exist'})
                else return res.status(400).json({message:'Error in the process'})
            }
        }
       
    
    //Mostrar información de un empleado
    async show(req, res){
        const {id} = req.params;
        const employee = await Employee.findOne({ where: {id}, 
            include: [
                { model: Employee, as: 'boss' }, 
                { model: Employee, as: 'subordinate' }, 
        ],
         });
        
            if (employee === null) {
            return res.status(400).json({ message: 'Employee Not Found' });

            } else {

             return res.status(200).json({ message: 'Read Employee Successfuly', data: employee }); 
            }
    }
    //Actualizar los datos de un empleado
    async update(req, res){
        const {id} = req.params;
        const {...employee} = req.body;
        const find = await Employee.findOne({ where: {id} });

        if (find!== null) {
            try {
                await Employee.update(employee, { where: {id} });
                return res.status(200).json({ message: 'Update Employe Successfuly'});
            } catch (error) {
                if(error.errors[0].type=='unique violation') return res.status(400).json({message:'Identification employee is already exist'})
                return res.status(500).json({message:'Error en el guardado'})
            }
        }
        else{

            return res.status(400).json({ error: 'Employee Not Exist' });
        }
      

    }
    //Aplicar soft-delete a un empleado
    async delete(req, res){
       const {id} = req.params
       const find = await Employee.findOne({ where: {id} });
       
       if (find!== null) 
        {
            try {
                const response = await Employee.destroy({where:{id}})
                return res.status(200).json({ message: 'Delete Employee Successfuly'});
            } catch (error) {
                
            }
         }
        else return res.status(400).json({ error: 'Employee Not Found' });
    }
}
module.exports = EmployeeController;