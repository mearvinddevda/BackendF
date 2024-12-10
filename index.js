import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config({});
const app =express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req, res)=>{
    res.send("Server running 24*7");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log("Hello from server : " + PORT);
})