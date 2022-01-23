import express from 'express';
import leadRouter from './routes/leadRoute';

const app = express();

app.use(express.json());

app.use('/', leadRouter)

export default app;
