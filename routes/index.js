import express from "express";
import { paginaInicio,
    paginaProducto,
    paginaCategoria ,
    buscaProductoNombre,
    paginaProductoCategoria,
    paginaObtenerCategoriaProducto,
} from "../controllers/paginasControllers.js";

const router = express.Router();

router.get('/inicio',paginaInicio);
router.get('/producto',paginaProducto);
router.get('/categoria',paginaCategoria);
router.get('/producto/:pro',paginaProductoCategoria);
//ruta que busca productos por nombre 
router.post('/producto/:buscar_nombre_producto',buscaProductoNombre);
//ruta que busca productos por el id de la categoria 
router.get('/productos/:categoria_id',paginaObtenerCategoriaProducto);



export default router;