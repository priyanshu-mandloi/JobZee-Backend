import {
employerGetAllApplications,
jobseekerDeleteApplication,
jobseekerGetAllApplications,
postApplication
} from '../controller/applicationController.js';

import express from 'express';
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.get("/jobseeker/getall",isAuthenticated,jobseekerGetAllApplications);
router.get("/employer/getall",isAuthenticated,employerGetAllApplications);
router.delete("/delete/:id",isAuthenticated,jobseekerDeleteApplication);
router.post("/post",isAuthenticated,postApplication)
export default router;