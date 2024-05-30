import app from './app';
import './db';

app.listen(process.env.PORT||3000);
console.log("server en puerto", 3000);