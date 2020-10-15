import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database.js';

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