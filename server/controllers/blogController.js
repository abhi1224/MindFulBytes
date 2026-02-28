import imagekit from "../config/imagekit.js";
import { toFile } from "@imagekit/nodejs";
import Blog from "../models/blogModel.js";

export const addBlog = async (req, res) => {
  console.log("Inside addBlog controller");
  console.log(req.body);
  console.log(req.file);
  
  try {
    const { title, subtitle, description, category, isPublished } = req.body;
    const imageFile = req.file;

    // validation
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Required fields missing" });
    }

    // convert buffer → File object
    const fileObject = await toFile(imageFile.buffer, imageFile.originalname);
    console.log(fileObject);
    
    // upload using new SDK
    const response = await imagekit.files.upload({
      file: fileObject,
      fileName: Date.now() + "-" + imageFile.originalname,
      folder: "/blogs"
    });    
    console.log(response.url);
    
    // save blog
    await Blog.create({
      title,
      subtitle,
      description,
      category,
      image: response.url, 
      isPublished: isPublished ?? false
    });

    return res.json({ success: true, message: "Blog added successfully" });

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};




