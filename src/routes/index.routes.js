import {Router} from 'express';
import { deleteAuto, getEditA, insertarAuto, postEditA ,renderIndex ,renderTablaA,renderEAU ,renderEAE, rendervalidA} from '../controllers/auto.controlador';
import { deleteCliente, getEditC, insertarCliente, postEditC,renderTablaC,renderECU ,renderECE, rendervalidC } from '../controllers/cliente.controlador';
import { deleteVendedor, getEditV, insertarVendedor, postEditV,renderTablaV,renderEVU ,renderEVE, rendervalidV } from '../controllers/vendedor.controlador';


const router = Router();
//Index
router.get('/',renderIndex );

//TABLAS
router.get('/tabla', renderTablaA);
router.get('/clientes', renderTablaC);
router.get('/vendedores', renderTablaV);

//ALTAS
router.get('/altas',(req,res)=>{
    res.render('altas');
});
router.get('/altasC',(req,res)=>{
    res.render('altasC');
});
router.get('/altasV',(req,res)=>{
    res.render('altasV');
});


//render
router.get('/tabla',(req,res)=>{
    res.render('tabla');
});
router.get('/clientes',(req,res)=>{
    res.render('clientes');
});
router.get('/vendedores',(req,res)=>{
    res.render('vendedores');
});

//ADD
router.post('/autos/add',insertarAuto);
router.post('/clientes/add',insertarCliente);
router.post('/vendedores/add',insertarVendedor);

//BAJAS
router.get('/autos/:id/delete', deleteAuto);
router.get('/clientes/:id/deleteC', deleteCliente);
router.get('/vendedores/:id/deleteV', deleteVendedor);

//CAMBIOS
router.get('/autos/:id/edit', getEditA);
router.post('/autos/:id/edit' ,postEditA);

router.get('/clientes/:id/editC', getEditC);
router.post('/clientes/:id/editC' ,postEditC);

router.get('/vendedores/:id/editV', getEditV);
router.post('/vendedores/:id/editV' ,postEditV);

//Errores
router.get('/errorAUni',renderEAU);
router.get('/errorAEmp',renderEAE);

router.get('/errorCUni',renderECU);
router.get('/errorCEmp',renderECE);

router.get('/errorVUni',renderEVU);
router.get('/errorVEmp',renderEVE);

router.get('/validAedit',rendervalidA);
router.get('/validCedit',rendervalidC);
router.get('/validVedit',rendervalidV);


//Export
export default router;