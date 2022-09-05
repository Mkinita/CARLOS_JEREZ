import {Producto} from '../Models/Producto.js'
import {Categoria} from '../Models/Categoria.js'
import { name } from 'pug/lib/index.js';

const paginaInicio = (req, res) => {
    res.render('inicio',{
    pagina:'inicio'
    });
}

const paginaProducto = async (req, res)  => {

    const product  =  await Producto.findAll() ;
    
    // console.log(product);
    res.render('producto',{
        pagina:'producto',
        product,
        });
}


const paginaCategoria = async (req, res) => {

    const cate = await Categoria.findAll();
    
    // console.log(cate)

    res.render('categoria',{
        pagina:'categoria',
        cate,
        });
}

const paginaProductoCategoria = async (req, res) =>{
    // console.log(req.params)
    const {pro} = req.params;

    try {
        const resultadodos = await Producto.findOne({where:{name:pro} });
        res.render('detallecategoria', {
            pagina:'informaciones',
            resultadodos
            
        })
    } catch (error) {
       console.log(error);
    }
}
const paginaObtenerCategoriaProducto = async (req,res) =>{
    const id_categoria = req.params.categoria_id;

    const productos = await Producto.findAll({ where: {
        category:id_categoria
      }});

      res.render('listado_categoria', {
        pagina:'listado',
        productos
        
    })
}
const buscaProductoNombre = async (req,res) =>{
    
    
    const {nombre} = req.body
    const buscar_nombre_producto = req.params.buscar_nombre_producto;
    const buscar = await Producto.findAll({ where: {
        name
      }});
      
      res.render('buscar_producto_nombre',{
        pagina:'buscar_producto_nombre',
        nombre,
        buscar,
        });
}






export {
    paginaInicio, 
    paginaProducto, 
    paginaCategoria,
    buscaProductoNombre,
    paginaProductoCategoria,
    paginaObtenerCategoriaProducto
}
