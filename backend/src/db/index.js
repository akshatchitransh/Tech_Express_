import mongoose from "mongoose"
const connectdb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("dbconnnected");

    }
    catch(error){
        console.error(error)
    }
}
export{connectdb}