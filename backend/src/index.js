import dotenv from "dotenv"
import app from "./app.js"
import { ApiResponse } from "./utils/api-response.js";
import { connectdb } from "./db/index.js";
dotenv.config();

const PORT = process.env.PORT;

connectdb()
.then(()=>{app.listen(PORT , ()=>{
    console.log("server started")
})})
.catch((error)=>{
    console.error("Mongodb connection error")
})
