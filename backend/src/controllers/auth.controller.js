import express from "express"
import bcryptjs from "bcryptjs"
import User from "../models/user.model.js"
import { asyncHandler } from "../utils/async-handler.js"
import { ApiError } from "../utils/api-error.js"
import jwt from "jsonwebtoken"

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

export const signin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password || email === "" || password === "") {
   throw new ApiError(400 , "All fields are required")
  }

  try {
    const validUser = await User.findOne({ email })

    if (!validUser) {
     throw new ApiError(400 , "User not found")
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password)

    if (!validPassword) {
     throw new ApiError(400 , "Wrong credentials")
    }

    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    )

   // const { password: pass, ...rest } = validUser._doc

    res.status(200).cookie("access_token", token, { httpOnly: true , secure:true }).json({msg:"loggedin"})
  } catch (error) {
    next(error)
  }
})


