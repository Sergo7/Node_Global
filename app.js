import express from 'express';

//importing routes

import userRoutes from './routes/user.js';

//initialization
const app = express();

app.use(express.json());

//routes
app.use('/api/users/', userRoutes);

export default app;