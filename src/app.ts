import express from 'express';
import cors from 'cors';
import leadRouter from './routes/leadRoute';

interface ICorsOptions {
    origin: string;
    optionsSuccessStatus: number;
}

const corsOptions: ICorsOptions = {
	origin: 'https://on-reas-web.vercel.app',
	optionsSuccessStatus: 200,
}

const app = express();

app.use(express.json());
app.use(cors(corsOptions));


app.use('/', leadRouter);

export default app;
