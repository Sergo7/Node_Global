import express from "express";
import {
    createGroup,
    getAllGroups,
    getOneGroup,
    deleteGroup,
    updateGroup,
} from '../controllers/group.controller.js';

import { addUsersToGroup } from '../controllers/user-group.controller.js'

const router = express.Router();

router.post('/', createGroup);
router.get('/', getAllGroups);

router.get('/:id', getOneGroup);
router.delete('/:id', deleteGroup);
router.put('/:id', updateGroup);

router.post('/user-groups', addUsersToGroup);


export default router;