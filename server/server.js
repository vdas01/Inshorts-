import  express  from "express";
import Connection from './db/db.js';
import DefaultData from './default.js';
import Route from './routers/Route.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
// app.get('/',(req,res)=>{
//     res.send('hello world')
// })
app.use(cors());     //for cors error
app.use('/',Route)

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"))
}

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port =process.env.PORT || 8000;
const url =process.env.MONGODB_URL || `mongodb+srv://${username}:${password}@cluster0.xpybw.mongodb.net/?retryWrites=true&w=majority`;

Connection(url);
DefaultData();
app.listen(port,()=>{
  console.log(`Listening at port no ${port}`);
})