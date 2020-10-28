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
    UserGroup
} from "../models/User-Group.js";
import Group from "../models/Groups.js";
import {
    User
} from "../models/Users.js";

import {
    logParams
} from '../log/logger.js';

export const router = express.Router();

// /api/users/
router.post("/", logParams, UserValidation, createUser);
router.get("/", logParams, getUsers);

// /api/users/:userID
router.get("/:id", logParams, getOneUser);
router.delete("/:id", logParams, deleteUser);
router.put("/:id", logParams, UserValidation, updateUser);

User.belongsToMany(Group, {
    through: UserGroup,
    as: "groups",
    foreignKey: "userid"
});

Group.belongsToMany(User, {
    through: UserGroup,
    as: "users",
    foreignKey: "groupid"
});

export default router;