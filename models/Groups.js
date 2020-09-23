import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database.js';

const Group = sequelize.define('groups', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    permission: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    userid: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});



export default Group;