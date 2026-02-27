import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
    res.send("Api is working")
})

app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    
})

export default app