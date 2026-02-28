import jwt from 'jsonwebtoken'
import Blog from '../models/Blog.js'
import Comment from '../models/Comment.js'

export const adminController = (req, res) => {
    try {
        const { email, password } = req.body
        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({success: false, message: 'Invalid credentials'})
        }
        const token = jwt.sign({email}, process.env.JWT_SECRET)
        res.json({success: true, token})
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export const getAllBlogsAdmin = async (req, res) => {
    try{
        const blogs = await Blog.find({}).sort({createdAt: -1})
        return res.json({success: true, blogs, message: 'Blogs fetched successfully'})
    }
    catch(error){
        return res.json({success: false, message: error.message})
    }
}

export const getAllComments = async (req, res) => {
    try{
        const comments = await Comment.find({}).populate('blog').sort({createdAt: -1})
        return res.json({success: true, comments, message: 'Comments fetched successfully'})
    }
    catch(error){
        return res.json({success: false, message: error.message})
    }   
}

export const getDashboardData = async (req, res) => {
    try {
        const recentBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5)
        const blogsCount = await Blog.countDocuments()
        const commentsCount = await Comment.countDocuments()
        const draftBlogsCount = await Blog.countDocuments({isPublished: false})

        const dashboardData = {
            recentBlogs,
            blogsCount,
            commentsCount,
            draftBlogsCount
        }
        return res.json({success: true, dashboardData, message: 'Dashboard data fetched successfully'})
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export const deleteCommentById = async (req, res) => {
    try {
        const { commentId } = req.body
        const deletedComment = await Comment.findByIdAndDelete(commentId)
        if (!deletedComment) {
            return res.json({success: false, message: 'Comment not found'})
        }
        return res.json({success: true, deletedComment, message: 'Comment deleted successfully'})
    } catch (error) {
        return res.json({success: false, message: error.message})
    }       
}

export const approveCommentById = async (req, res) => {
    try {
        const { commentId } = req.body
        const approvedComment = await Comment.findByIdAndUpdate(commentId, {isApproved: true})
        if (!approvedComment) {
            return res.json({success: false, message: 'Comment not found'})
        }           
        return res.json({success: true, approvedComment, message: 'Comment approved successfully'})
    } catch (error) {
        return res.json({success: false, message: error.message})
    }           
}