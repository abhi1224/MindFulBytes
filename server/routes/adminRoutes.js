import express from "express";
import { adminController } from "../controllers/adminContoller.js";

const adminRouter = express.Router();

adminRouter.post('/login', adminController)

export default adminRouter