import express from 'express';
import leadRouter from './routes/leadRoutes';

const app = express();

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Hello from the server',
	});
});

app.post('/lead', (req, res) => {
	res.status(201).json({
		message: 'Here is the lead endpoint',
	});
});

app.use('/lead', leadRouter);

export default app;
