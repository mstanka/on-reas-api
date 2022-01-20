import express from 'express';
import { createLead } from '../controllers/leadController';

const router = express.Router();

// @ts-ignore //TODO
router.route('/lead').post(createLead);

export default router;
