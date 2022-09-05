import Sequelize from 'sequelize';
import db from '../config/db.js';


export const Producto = db.define('product',{
    name:{
        type: Sequelize.STRING
    },
    url_image:{
        type: Sequelize.STRING
     },
    price:{
        type: Sequelize.FLOAT
    },
    discount:{
        type: Sequelize.INTEGER
    },
    category:{
        type: Sequelize.INTEGER
    },

});




