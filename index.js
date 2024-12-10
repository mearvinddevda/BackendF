import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js'; 
// import contactFormRouter from './router/contactform.route.js'
import { ContactForm } from './model/contactform.model.js';

dotenv.config({});
const app =express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req, res)=>{
    res.send("Server running 24*7");
})


// app.use("/contactdetails",contactFormRouter);
app.get("/contactdetails/getClients",async (req, res) => {
	try {
	  
	//   const client = await ContactForm.find();
	//   if (!client) {
	// 	return res.status(404).json({
	// 	  message: "Clients not Found",
	// 	  success: false,
	// 	});
	//   }
	  return res.send("Hello route")
	} catch (error) {
	  console.log(error);
	}
}
);


const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    connectDB();
    console.log("Hello from server : " + PORT);
})