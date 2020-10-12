import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database.js';

export const UserGroup = sequelize.define('userGroup', {
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'User',
            key: 'id',
            as: 'userid'
        }
    },
    groupId: {
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