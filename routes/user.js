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

const router = express.Router();

// /api/users/
router.post("/", UserValidation, createUser);
router.get("/", getUsers);

// /api/users/:userID
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.put("/:id", UserValidation, updateUser);

export default router;