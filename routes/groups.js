import express from "express";
import {
    createGroup,
    getAllGroups,
    getOneGroup,
    deleteGroup,
    updateGroup,
    getGroupByUser
} from '../controllers/group.controller.js';

const router = express.Router();

router.post('/', createGroup);
router.get('/', getAllGroups);

router.get('/:id', getOneGroup);
router.delete('/:id', deleteGroup);
router.put('/:id', updateGroup);

// /api/users/group/userId

router.get('/user/:userid', getGroupByUser);

export default router;