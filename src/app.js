import express from 'express';
import indexRoutes from './routes/index.routes';
import {create} from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';

const app = express();

app.set("views",path.join(__dirname,'views'));



app.engine(".hbs",create({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'),
    defaultLayout: 'main'
}).engine);
app.set('view engine','.hbs');


//app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}))

//Routes
app.use(indexRoutes);



export default app;
