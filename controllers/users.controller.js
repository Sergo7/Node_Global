import {
    findAllUsers,
    addUser,
    findOneUser,
    deleteUserById
} from '../services/index.js';

// Get all Users
export const getUsers = async (req, res) => {
    try {
        const users = await findAllUsers();

        res.json(users);
    } catch (e) {
        console.log(e);
    }
};

// Create and save new User
export const createUser = async (req, res) => {
    try {
        const newUser = await addUser(req.body);

        if (newUser) {
            return res.json(newUser);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
};

// Get User by ID
export const getOneUser = async (req, res) => {
    const {
        id
    } = req.params;

    const user = await findOneUser(id);

    res.json(user);
};

// Delete User
export const deleteUser = async (req, res) => {
    const {
        id
    } = req.params;

    await deleteUserById(id);

    res.status(202);

};

// Update User
export const updateUser = async (req, res) => {
    const {
        id
    } = req.params;

    const {
        login,
        password,
        age
    } = req.body;

    const users = await findAllUsers(id);

    if (users.length > 0) {
        users.forEach(async user => {
            await user.update({
                login,
                password,
                age
            });
        });
    }

    return res.json(users);
};