import {Router} from 'express';
import { deleteAuto, getEditA, insertarAuto, postEditA,renderIndexA,renderTablaA } from '../controllers/auto.controlador';
import { deleteCliente, getEditC, insertarCliente, postEditC,renderTablaC } from '../controllers/cliente.controlador';

const router = Router();
//Index
router.get('/',renderIndexA );

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

//Export
export default router;