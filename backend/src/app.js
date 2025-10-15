import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import postRoutes from "./routes/post.route.js"

const app = express();
app.use(express.json({limit:"16kb"}))
app.use(cookieParser())
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
app.use('/api/user',userRoutes)
app.use('/api/post',postRoutes)


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