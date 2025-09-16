import express from "express"
import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import { asyncHandler } from "../utils/async-handler.js"
import { ApiError } from "../utils/api-error.js"

export const signup = asyncHandler(async (req, res,next) => {
  const { username, email, password } = req.body

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    throw new ApiError(400 , "All fields are required")
  }

  const hashedPassword = bcryptjs.hashSync(password, 10)

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  })

  
    await newUser.save()

    res.json("Signup successful")

})

export const signin = ()=>{

}


