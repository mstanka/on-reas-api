import { Request, Response } from 'express';
import Lead from './../models/leadModel';

export async function createLead(_req: Request, res: Response): Promise<void> {
	try {
		const newLead = new Lead(_req.body);
		await newLead.save();
		res.status(201).json({
			status: 'success',
			data: {
				newLead,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
}
