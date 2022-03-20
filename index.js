import express from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import connection from './connection.js';
import { createEntry,getdata } from './helper.js';


const app=express();
dotenv.config();
app.use(cors());
app.use(express.json())
const Port =process.env.PORT ;



app.get("/",(req,res)=>{
    console.log("WELCOME")
})

app.post('/upload', async(req,res)=>{
    const client=await connection();
    const user=await createEntry(client);
    console.log(user);
    res.send(user);

   
})

app.get('/data',async(req,res)=>{
    const client=await connection();
    const users=await getdata(client);
    console.log(users);
    res.send(users)
})

app.listen(Port,()=>{
    console.log("PORT is live",Port)
})