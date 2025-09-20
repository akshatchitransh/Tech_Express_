import { ApiError } from "./api-error.js"
import { asyncHandler } from "./async-handler.js"
import jwt from "jsonwebtoken"

export const verifyToken = asyncHandler((req, res, next) => {
  const token = req.cookies.access_token

  if (!token) {
   throw new ApiError (401, "Unauthorized") 
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
     throw new ApiError (401, "Unauthorized")  
    }

    req.user = user

    next()
  })
})