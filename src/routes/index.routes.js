import {Router} from 'express';
import { deleteAuto, getEdit, insertarAuto, postEdit, renderIndex,renderTabla} from '../controllers/auto.controlador';

const router = Router();
//Index
router.get('/',renderIndex );

router.get('/tabla', renderTabla);

//ALTAS
router.get('/altas',(req,res)=>{
    res.render('altas');
});

router.get('/tabla',(req,res)=>{
    res.render('tabla');
});


router.post('/autos/add',insertarAuto);

//BAJAS
router.get('/autos/:id/delete', deleteAuto);



//CAMBIOS
router.get('/autos/:id/edit', getEdit);
router.post('/autos/:id/edit' ,postEdit);

//Export
export default router;