import express from 'express';
import {
    createUser,
    getUsers,
    getOneUser,
    deleteUser,
    updateUser
} from '../controllers/users.controller.js';

const router = express.Router();

// /api/users/
router.post('/', createUser);
router.get('/', getUsers);

// /api/users/:userID
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;