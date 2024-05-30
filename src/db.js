import {connect} from 'mongoose';



(async ()=>{
    try {
        const db = await connect("mongodb+srv://cesar2xd2:cesar2xd2@clusterxd.a5efmkr.mongodb.net/?retryWrites=true&w=majority&appName=ClusterXD");
        console.log("BD conexion to ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
    
})();
