import express from 'express';

//importing routes

import userRoutes from './routes/user.js';
import groupRoutes from './routes/groups.js';

//initialization
const app = express();

app.use(express.json());

//routes
app.use('/api/users/', userRoutes);
app.use('/api/groups/', groupRoutes);

export default app;