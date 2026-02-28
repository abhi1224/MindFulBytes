import express from "express";
import { addBlog, deleteBlogById, getAllBlogs, getBlogById } from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";
import authMiddleware from "../middlewares/auth.js";

const blogRouter = express.Router()

blogRouter.post('/add',authMiddleware, upload.single('upload'), addBlog)
blogRouter.get('/all', getAllBlogs)
blogRouter.get('/:id', getBlogById)
blogRouter.post('/delete', authMiddleware, deleteBlogById)


export default blogRouter