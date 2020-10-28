import express from 'express';

//importing routes

import userRoutes from './routes/user.js';
import groupRoutes from './routes/groups.js';
import {
    UserGroup
} from './models/User-Group.js';

import Group from './models/Groups.js';
import {
    User
} from './models/Users.js';

//initialization
const app = express();

app.use(express.json());

//routes
app.use('/api/users/', userRoutes);
app.use('/api/groups/', groupRoutes);

User.belongsToMany(Group, {
    through: UserGroup,
    as: 'groups',
    foreignKey: 'userid'
});

Group.belongsToMany(User, {
    through: UserGroup,
    as: 'users',
    foreignKey: 'groupid'
});

export default app;