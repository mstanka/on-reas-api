import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './index';

dotenv.config({ path: './config/.env' });

const DB = process.env.DB as string;

mongoose.connect(DB);
mongoose.connection.on('connection', () => {
	console.log('DB connection successful');
});
mongoose.connection.on('error', (err) => {
	console.log(err);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
