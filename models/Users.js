import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database.js';

import Group from './Groups.js';

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    login: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    },
    age: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

User.hasMany(Group, {
    foreignKey: 'userid',
    sourceKey: 'id'
});

Group.belongsTo(User, {
    foreignKey: 'userid',
    sourceKey: 'id'
});

export default User;