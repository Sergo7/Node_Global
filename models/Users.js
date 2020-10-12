import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database.js';

import Group from './Groups.js';
import {
    UserGroup
} from './User-Group.js';

export const User = sequelize.define('users', {
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


// User.associate = function (models) {
User.belongsToMany(Group, {
    through: UserGroup,
    as: 'groups',
    foreignKey: 'userid'
});
// };