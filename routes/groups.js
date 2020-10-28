import express from "express";
import {
    createGroup,
    getAllGroups,
    getOneGroup,
    deleteGroup,
    updateGroup,
} from '../controllers/group.controller.js';

import {
    addUsersToGroup
} from '../controllers/user-group.controller.js';
import {
    logParams
} from '../log/logger.js';

const router = express.Router();

router.post('/', logParams, createGroup);
router.get('/', logParams, getAllGroups);

router.get('/:id', logParams, getOneGroup);
router.delete('/:id', logParams, deleteGroup);
router.put('/:id', logParams, updateGroup);

router.post('/user-groups', addUsersToGroup);


export default router;