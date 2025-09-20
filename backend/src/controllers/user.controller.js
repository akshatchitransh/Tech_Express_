import User from "../models/user.model.js"
import { ApiError } from "../utils/api-error.js"
import { asyncHandler } from "../utils/async-handler.js"
import bcryptjs from "bcryptjs"

export const updateUser = asyncHandler(async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    throw new ApiError(403, "You can only update your own account!") 
  }

  if (req.body.password) {
    if (req.body.password.length < 8) {
       throw new ApiError(400, "Password must be atleast 8 characters") 
    }

    req.body.password = bcryptjs.hashSync(req.body.password, 10)
  }

  if (req.body.username) {
    if (req.body.username.length < 5 || req.body.username.length > 20) {
    throw new ApiError(400, "Username must be between 5 and 20 characters")   
    }

    if (req.body.username.includes(" ")) {
     throw new ApiError(400, "Username cannot contain spaces") 
    }

    if (req.body.username !== req.body.username.toLowerCase()) {
      req.body.username = req.body.username.toLowerCase()
    }

    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
     throw new ApiError(400, "Username can only contain letters and numbers")  
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    )

    const { password: pass, ...rest } = updatedUser._doc

    res.status(200).json(rest)
  } catch (error) {
    next(error)
  }
})

export const deleteUser = asyncHandler(async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    throw new ApiError(403, "You can only update your own account!") 
  }

  try {
    await User.findByIdAndDelete(req.params.userId)

    res.status(200).json("User has been deleted!")
  } catch (error) {
    next(error)
  }
})

export const signout = asyncHandler(async (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User has been loggedout successfully!")
  } catch (error) {
    next(error)
  }
})

export const getUsers = asyncHandler(async (req, res, next) => {
  if (!req.user.isAdmin) {
   throw new ApiError(403, "You are not authorized to access this resource!") 
  }

  try {
    const startIndex = parseInt(req.query.startIndex) || 0
    const limit = parseInt(req.query.limit) || 9
    const sortDirection = req.query.sort === "asc" ? 1 : -1

    const users = await User.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit)

    const getUsersWithoutPassword = users.map((user) => {
      const { password: pass, ...rest } = user._doc

      return user
    })

    const totalUsers = await User.countDocuments()

    const now = new Date() // 2024 15 Nov

    const oneMonthAgo = new Date( // 2024 15 Oct
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    )

    const lastMonthUsers = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    })

    res.status(200).json({
      users: getUsersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    })
  } catch (error) {
    next(error)
  }
})

export const getUserById = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)

    if (!user) {
     throw new ApiError(404, "User not found!")  
    }

    const { password, ...rest } = user._doc

    res.status(200).json(rest)
  } catch (error) {
    next(error)
  }
})