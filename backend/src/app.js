import express, { urlencoded } from "express"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"

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


app.use('/api/auth',authRoutes)


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500

  const message = err.message || "Internal Server Error"

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})

export default app;