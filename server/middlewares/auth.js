import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        return res.json({success: false, message: 'Unauthorized'})
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.json({success: false, message: 'Invalid token'})
    }
}

export default authMiddleware