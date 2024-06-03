import {Router} from 'express';
import { deleteAuto, getEditA, insertarAuto, postEditA ,renderIndex ,renderTablaA,renderEAU ,renderEAE, rendervalidA} from '../controllers/auto.controlador';
import { deleteCliente, getEditC, insertarCliente, postEditC,renderTablaC,renderECU ,renderECE, rendervalidC } from '../controllers/cliente.controlador';

const router = Router();
//Index
router.get('/',renderIndex );

router.get('/tabla', renderTablaA);
router.get('/clientes', renderTablaC);
//ALTAS
router.get('/altas',(req,res)=>{
    res.render('altas');
});
router.get('/altasC',(req,res)=>{
    res.render('altasC');
});

//render
router.get('/tabla',(req,res)=>{
    res.render('tabla');
});
router.get('/clientes',(req,res)=>{
    res.render('clientes');
});


router.post('/autos/add',insertarAuto);
router.post('/clientes/add',insertarCliente);

//BAJAS
router.get('/autos/:id/delete', deleteAuto);
router.get('/clientes/:id/deleteC', deleteCliente);

//CAMBIOS
router.get('/autos/:id/edit', getEditA);
router.post('/autos/:id/edit' ,postEditA);

router.get('/clientes/:id/editC', getEditC);
router.post('/clientes/:id/editC' ,postEditC);

//Errores
router.get('/errorAUni',renderEAU);
router.get('/errorAEmp',renderEAE);

router.get('/errorCUni',renderECU);
router.get('/errorCEmp',renderECE);

router.get('/validAedit',rendervalidA);
router.get('/validCedit',rendervalidC);


//Export
export default router;