import Sequelize from 'sequelize';
import {
    sequelize
} from '../database/database.js';
import {
    User
} from './Users.js';

import {
    UserGroup
} from './User-Group.js';

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
// Group.associate = (models) => {

// };

export default Group;

Group.belongsToMany(User, {
    through: UserGroup,
    as: 'users',
    foreignKey: 'groupid'
});