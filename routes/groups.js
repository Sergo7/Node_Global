import express from "express";
import {
    createGroup,
    getAllGroups,
    getOneGroup,
    deleteGroup,
    updateGroup,
} from '../controllers/group.controller.js';
import {
    logParams
} from '../log/logger.js';
import {
    addUsersToGroup
} from '../controllers/user-group.controller.js';

import {
    authenticateToken
} from '../controllers/login.controller.js';

const router = express.Router();

router.post('/', logParams, authenticateToken, createGroup);
router.get('/', logParams, authenticateToken, getAllGroups);

router.get('/:id', logParams, authenticateToken, getOneGroup);
router.delete('/:id', logParams, authenticateToken, deleteGroup);
router.put('/:id', logParams, authenticateToken, updateGroup);

router.post('/user-groups', addUsersToGroup);


export default router;