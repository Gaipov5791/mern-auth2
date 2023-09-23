import express from 'express';
import { auth } from '../controllers/userController.js';

const router = express.Router();

router.get('/', auth);

export default router;