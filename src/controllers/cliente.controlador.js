import Cliente from '../models/Cliente';


export const renderIndexC = async (req,res)=>{
    const clientes =  await Cliente.find().lean();
    res.render('index',{clientes:clientes});
};

export const renderTablaC = async (req,res)=>{
    const clientes =  await Cliente.find().lean();
    res.render('clientes',{clientes:clientes});
};

//ALTA
export const insertarCliente = async (req,res)=>{
    try {
        const cliente = Cliente(req.body);
        const clienteadd = await cliente.save();
        res.redirect('/clientes');
    } catch (error) {
        console.log(error);
    }
};

//BAJAS
export const deleteCliente = async (req,res)=>{
    const {id} = req.params;
    await Cliente.findByIdAndDelete(id);
    res.redirect('/clientes');
};

//CAMBIO
export const getEditC = async (req,res)=>{
    try {
        const cliente = await Cliente.findById(req.params.id).lean();
        res.render('editC', {cliente});
    } catch (error) {
        console.log(error.message);
    }
};
export const postEditC = async (req,res)=>{
    const {id} = req.params
    await Cliente.findByIdAndUpdate(id,req.body);
    res.redirect('/clientes');
};