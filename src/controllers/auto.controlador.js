import Auto from '../models/Auto';


export const renderIndex = async (req,res)=>{
    const autos =  await Auto.find().lean();
    res.render('index',{autos:autos});
};

export const renderEAU = async (req,res)=>{
    const autos =  await Auto.find().lean();
    res.render('errorAUni',{autos:autos});
};

export const renderEAE = async (req,res)=>{
    const autos =  await Auto.find().lean();
    res.render('errorAEmp',{autos:autos});
};

export const rendervalidA = async (req,res)=>{
    const autos =  await Auto.find().lean();
    res.render('validAedit',{autos:autos});
};

export const renderTablaA = async (req,res)=>{
    const autos =  await Auto.find().lean();
    res.render('tabla',{autos:autos});
};



//ALTA
export const insertarAuto = async (req,res)=>{
    try {
        const auto = Auto(req.body);
        const autoadd = await auto.save();
        res.redirect('/tabla');
    } catch (error) {
        if(error.name == "MongoServerError"){ 
            res.redirect('/errorAUni');
        }else if(error.name == "ValidationError"){
            res.redirect('/errorAEmp');
        }
        
    }
};

//BAJAS
export const deleteAuto = async (req,res)=>{
    const {id} = req.params;
    await Auto.findByIdAndDelete(id);
    res.redirect('/tabla');
};

//CAMBIO
export const getEditA = async (req,res)=>{
    try {
        const auto = await Auto.findById(req.params.id).lean();
        res.render('edit', {auto});
    } catch (error) {
        console.log(error.message);
    }
};
export const postEditA = async (req,res)=>{
    const {id} = req.params
    if(req.body.precio == '' || req.body.modelo == '' ||req.body.capacidad == '' ||req.body.color == ''){
        res.redirect('/validAedit')
    }else{
        await Auto.findByIdAndUpdate(id,req.body);
        res.redirect('/tabla');
    }
};