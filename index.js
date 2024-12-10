import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js'; 
import contactFormRouter from './router/contactform.route.js'

dotenv.config({});
const app =express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req, res)=>{
    res.send("Server running 24*7");
})


app.use("/contactdetails",contactFormRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    connectDB();
    console.log("Hello from server : " + PORT);
})