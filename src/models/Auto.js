import {Schema,model} from 'mongoose';

const autoSch = new Schema({
    id:{
        type: String,
        required: true
    },
    precio:{
        type: String,
        required: true,
    },
    modelo:{
        type: String,
        required: true,
    },
    anio:{
        type: String,
        required: true,
    },
    cilindros:{
        type: String,
        required: true,
    },
    puertas:{
        type: String,
        required: true,
    },
    capacidad:{
        type: String,
        required: true,
    },
    color:{
        type: String,
        required: true,
    }      
});

export default model('auto',autoSch);

