import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';
import './db';
import cors from 'cors';
import usersRouter from './api/users';
import authenticate from './authenticate';

dotenv.config();

const app = express();

// Enable CORS for all requests
app.use(cors());

const port = process.env.PORT;

app.use(express.static('public'));

app.use(express.json());

app.use('/api/tasks', authenticate, tasksRouter);
//Users router
app.use('/api/users', usersRouter);



app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
