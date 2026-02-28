import imagekit from "../config/imagekit.js";
import { toFile } from "@imagekit/nodejs";
import Blog from "../models/blogModel.js";

export const addBlog = async (req, res) => {  
  try {
    const { title, subTitle, description, category, isPublished } = req.body;
    const imageFile = req.file;
    
    // validation
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Required fields missing" });
    }

    // convert buffer → File object
    const fileObject = await toFile(imageFile.buffer, imageFile.originalname);
    
    // upload using new SDK
    const response = await imagekit.files.upload({
      file: fileObject,
      fileName: Date.now() + "-" + imageFile.originalname,
      folder: "/blogs"
    });    
    
    // save blog
    const blog = await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: response.url, 
      isPublished: isPublished ?? false
    });

    return res.json({ success: true, message: "Blog added successfully", blog });

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};


export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({isPublished: true})
    return res.json({ statusCode:200, success: true, blogs, message: "Blogs fetched successfully" });
    
  } catch (error) {
    return res.json({ statusCode:500, success: false, message: error.message });
  }
}


export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.json({ statusCode:404, success: false, message: "Blog not found" });
    }
    return res.json({ statusCode:200, success: true, blog, message: "Blog fetched successfully" });
  } catch (error) {
    return res.json({ statusCode:500, success: false, message: error.message });
  }
}


export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body
    const blog = await Blog.findByIdAndDelete(id);
    if(!blog){
      return res.json({ statusCode:404, success: false, message: "Blog not found" });
    }
    return res.json({ statusCode:200, success: true, message: "Blog deleted successfully", blog });
  } catch (error) {
    return res.json({ statusCode:500, success: false, message: error.message });  
  }
}

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body
    const blog = await Blog.findById(id)
    if(!blog){
      return res.json({ statusCode:404, success: false, message: "Blog not found" });
    }
    blog.isPublished = !blog.isPublished
    await blog.save()
    return res.json({ statusCode:200, success: true, message: `Blog ${blog.isPublished ? "published" : "unpublished"} successfully`, blog });
  } catch (error) {
    return res.json({ statusCode:500, success: false, message: error.message });
  }
}