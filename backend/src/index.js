import dotenv from "dotenv"
import app from "./app.js"
import { ApiResponse } from "./utils/api-response.js";
dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT , ()=>{
    console.log("server started")
})