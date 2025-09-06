import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    return next(new ErrorHandler("Please enter all fields", 401));
  }

  let user = await User.findOne({ email: email });
  if (user) {
    return next(new ErrorHandler("User already exists", 401));
  }

  user = await User.create({
    name: name,
    email: email,
    password: password,
  });

  res.status(200).json({
    success: true,
    message: "User created successfully",
  });
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please enter all fields", 401));
  }

  let user = await User.findOne({ email: email });
  if (!user) {
    return next(new ErrorHandler("Incorrect Email or Password", 401));
  }

  const isMatched = await user.comparePassword(password);

  if (!isMatched) {
    return next(new ErrorHandler("Incorrect Email or Password", 401));
  }

  sendToken(res, user, `Welcome Back ${user.name}`, 200);
});

export const logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  return res.status(200).json({
    success: true,
    user,
  });
});
