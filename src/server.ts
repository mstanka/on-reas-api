import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: './config/.env' });

const DB = process.env.DB as string;

mongoose.connect(DB);
console.log('DB connection successful');

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
