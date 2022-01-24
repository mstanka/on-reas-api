import express from 'express';
import { createLead } from '../controllers/leadController';

const router = express.Router();

router.route('/lead').post(createLead);

export default router;
