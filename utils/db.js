import mongoose from "mongoose";

const connectDB = async (req , res) =>{

    try {
        await mongoose.connect(process.env.DB_URL ,{
            useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10,
        });
        console.log("DataBase Connected");
        res.send("Hii")
    } catch (error) {
        console.log(error);
        
    }
}
export default connectDB;