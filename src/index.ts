import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { connectDB } from './db/connectDB';
import tasks from './router/TaskRouter';

const port = 3000;
const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
app.use('/api/v1/tasks', tasks);

connectDB();

app.listen(port,
    () => console.log(`server is listening at http://localhost:${port}`));
