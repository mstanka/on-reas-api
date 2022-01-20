import Lead from './../models/leadModel';

export const createLead = async (req: Request, res: Response): Promise<void> => {
	try {
		const newLead = await Lead.create(req.body);
        // @ts-ignore  //TODO
		res.status(201).send({
			status: 'success',
			data: {
				lead: newLead,
			},
		});
	} catch (err) {
        // @ts-ignore  //TODO
		res.status(400).json({
			status: 'fail',
			message: err,
		});
	}
};

