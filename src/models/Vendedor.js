import {Schema,model} from 'mongoose';

const vendedorSch = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    nombre:{
        type: String,
        required: true,
    },
    correoe:{
        type: String,
        required: true,
    } 
});

export default model('vendedor',vendedorSch);

