import { Router } from 'express';
import { previewScheme } from '../controllers/salarySchemeController.js';
const r = Router();

r.post('/preview', previewScheme);
export default r;
