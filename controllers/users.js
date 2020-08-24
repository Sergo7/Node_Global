import {
    v4 as uuidv4
} from "uuid";
import {
    schemaValidation
} from '../helpers/schemaValidation.js';

import {
    getAutoSuggestUsers,
    users
} from '../helpers/autoSuggestUsers.js';

export const createUser = (req, res) => {
    const data = req.body;

    const schema = schemaValidation();
    const validation = schema.validate(req.body);

    if (validation.error) {
        res.status(400).send(validation.error.details[0].message);
    } else {
        users.push({
            ...data,
            id: uuidv4()
        });
        res.send(validation);
    }
};

export const getUser = (req, res) => res.send(users);

export const findUser = (req, res) => {
    const {
        id
    } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const {
        id
    } = req.params;

    const user = users.find(user => user.id === id);
    if (user) user.isDeleted = true;

    res.send(`User with the id ${id} deleted from the database.`);
};

export const updateUser = (req, res) => {
    const {
        id
    } = req.params;
    const {
        login,
        password,
        age,
    } = req.body;

    const schema = schemaValidation();
    const validation = schema.validate(req.body);

    if (validation.error) {
        res.status(400).send(validation.error.details[0].message);
    } else {
        const user = users.find(user => user.id === id);

        if (login) user.login = login;
        if (password) user.password = password;
        if (age) user.age = age;

        res.send(`User with the id ${id} has been updated`);
    }
};

export const getSuggestLogin = (req, res) => {
    const {
        login,
        limit
    } = req.query;

    const suggest = getAutoSuggestUsers(login, limit);

    res.json(suggest);
};