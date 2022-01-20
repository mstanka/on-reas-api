import express from 'express';

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

const port = 3000;

app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
