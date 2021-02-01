const {  DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
class Employee extends Model {}

Employee.init({
  "name": DataTypes.STRING,
  identification: {
    type:DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  "boss_id": DataTypes.INTEGER,
  "_function": DataTypes.STRING

}, {
  sequelize, 
  //aplicamos paraonid para trabajar con borrado suave
  paranoid: true,
  modelName: 'Employee' 
});


Employee.hasMany(Employee, {as:'subordinate', foreignKey: 'boss_id' });
Employee.belongsTo(Employee, {as:'boss', foreignKey: 'boss_id' });


console.log(Employee === sequelize.models.Employee);
module.exports = Employee;