import Vendedor from '../models/Vendedor';


export const renderIndexV = async (req,res)=>{
    const vendedores =  await Vendedor.find().lean();
    res.render('index',{vendedores:vendedores});
};

export const renderTablaV = async (req,res)=>{
    const vendedores =  await Vendedor.find().lean();
    res.render('vendedores',{vendedores:vendedores});
};

export const renderEVU = async (req,res)=>{
    const vendedores =  await Vendedor.find().lean();
    res.render('errorVUni',{vendedores:vendedores});
};

export const renderEVE = async (req,res)=>{
    const vendedores =  await Vendedor.find().lean();
    res.render('errorVEmp',{vendedores:vendedores});
};

export const rendervalidV = async (req,res)=>{
    const vendedores =  await Vendedor.find().lean();
    res.render('validVedit',{vendedores:vendedores});
};


//ALTA
export const insertarVendedor = async (req,res)=>{
    try {
        const vendedor = Vendedor(req.body);
        const vendedoradd = await vendedor.save();
        res.redirect('/vendedores');
    } catch (error) {
        if(error.name == "MongoServerError"){ 
            res.redirect('/errorVUni');
        }else if(error.name == "ValidationError"){
            res.redirect('/errorVEmp');
        }
    }
};

//BAJAS
export const deleteVendedor = async (req,res)=>{
    const {id} = req.params;
    await Vendedor.findByIdAndDelete(id);
    res.redirect('/vendedores');
};

//CAMBIO
export const getEditV = async (req,res)=>{
    try {
        const vendedor = await Vendedor.findById(req.params.id).lean();
        res.render('editV', {vendedor});
    } catch (error) {
        console.log(error.message);
    }
};
export const postEditV = async (req,res)=>{
    const {id} = req.params
    if(req.body.nombre == '' || req.body.correoe == ''){
        res.redirect('/validVedit')
    }else{
        await Vendedor.findByIdAndUpdate(id,req.body);
    res.redirect('/vendedores');
    }
    
};