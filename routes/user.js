import express from "express";

import {
    createUser,
    getUsers,
    getOneUser,
    deleteUser,
    updateUser
} from "../controllers/users.controller.js";

import {
    UserValidation
} from '../helpers/schemaValidation.js';
import {
    logParams
} from '../log/logger.js';
import {
    authenticateToken
} from '../controllers/login.controller.js';

const router = express.Router();

// /api/users/
router.post("/", logParams, authenticateToken, UserValidation, createUser);
router.get("/", logParams, authenticateToken, getUsers);

// /api/users/:userID
router.get("/:id", logParams, authenticateToken, getOneUser);
router.delete("/:id", logParams, authenticateToken, deleteUser);
router.put("/:id", logParams, authenticateToken, UserValidation, updateUser);

export default router;