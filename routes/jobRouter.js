import {deleteJob, getAllJobs, getSingleJob, getmyJobs, postJob, updateJob} from '../controller/jobController.js';

import express from 'express';
import {isAuthenticated} from '../middlewares/auth.js'

const router = express.Router();
router.get("/getall",getAllJobs);
router.post("/post",isAuthenticated,postJob);
router.get("/getmyJobs",isAuthenticated,getmyJobs);
router.put("/update/:id",isAuthenticated,updateJob);
router.delete("/delete/:id", isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);

export default router;