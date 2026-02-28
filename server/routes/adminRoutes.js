import express from "express";
import authMiddleware from "../middlewares/auth.js";
import { adminController, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboardData } from "../controllers/adminContoller.js";

const adminRouter = express.Router();

adminRouter.post('/login', adminController)
adminRouter.get('/blogs', authMiddleware, getAllBlogsAdmin)
adminRouter.get('/comments', authMiddleware, getAllComments)
adminRouter.post('delete-comment', authMiddleware, deleteCommentById)
adminRouter.post('approve-comment', authMiddleware, approveCommentById)
adminRouter.get('/dashboard', authMiddleware, getDashboardData)

export default adminRouter