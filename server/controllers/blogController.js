import fs from 'fs'
import imagekit from '../config/imagekit.js'
import Blog from '../models/blogModel.js'


export const addBlog = async (req, res) => {
    try {
        const { title, subtitle, description, category, isPublished } = JSON.parse(req.body.blog)

        const imageFile = req.file

        // check if all fields are present
        if(!title || !subtitle || !description || !category || !imageFile){
            return res.json({success: false, message: 'All fields are required'})   
        }

        const fileBuffer = fs.readFileSync(imageFile.path)

        // upload image to imagekit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/blogs'
        })

        // optimization through imagekit url
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: "auto"},
                {format: "webp"},
                {width: "1280"}
            ]
        })
        const image = optimizedImageUrl;

        await Blog.create({
            title,
            subtitle,
            description,
            category,
            image,
            isPublished
        })

        return res.json({success: true, message: 'Blog added successfully'})   

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}