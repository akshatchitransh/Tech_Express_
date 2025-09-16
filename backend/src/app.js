import express, { urlencoded } from "express"
import cors from "cors"

const app = express();
app.use(express.json({limit:"16kb"}))
app.use(urlencoded({extended:true ,limit: "16kb"}))
app.use(express.static("public"))


//cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
    methods: ["GET","POST","PUT","PATCH","DELETE"],
    allowedHeaders:["Content-Type","Authorization"],
}))


export default app;