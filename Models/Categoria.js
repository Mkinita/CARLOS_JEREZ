import Sequelize from 'sequelize';
import db from '../config/db.js'


export const Categoria = db.define('category',{
    name:{
        type: Sequelize.STRING
    },
});