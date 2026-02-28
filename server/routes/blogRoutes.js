import express from "express";
import { addBlog, getAllBlogs } from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";
import authMiddleware from "../middlewares/auth.js";

const blogRouter = express.Router()

blogRouter.post('/add',authMiddleware, upload.single('upload'), addBlog)
blogRouter.get('/all', getAllBlogs)


export default blogRouter