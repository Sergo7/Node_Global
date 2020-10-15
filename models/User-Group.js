import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database.js';

export const UserGroup = sequelize.define('userGroup', {
    userid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'User',
            key: 'id',
            as: 'userid'
        }
    },
    groupid: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Group',
            key: 'id',
            as: 'groupid'
        }
    }
}, {
    timestamps: false
});