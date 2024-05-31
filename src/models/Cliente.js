import {Schema,model} from 'mongoose';

const clienteSch = new Schema({
    id:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true,
    },
    direccion:{
        type: String,
        required: true,
    },
    correoe:{
        type: String,
        required: true,
    } 
});

export default model('cliente',clienteSch);

