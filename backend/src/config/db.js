import mongoose from "mongoose";



const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);

        if(connection){
            console.log("database connected successfully");
        }

    } catch (error) {
        console.log("error connecting database", error.message);
    }
}




export default connectDB;