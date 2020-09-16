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

        res.json({
            data: users
        });
    } catch (e) {
        console.log(e);
    }
};

// Create and save new User
export const createUser = async (req, res) => {
    try {
        let newUser = await addUser(req.body);

        if (newUser) {
            return res.json({
                message: "User created successfully",
                data: newUser
            });
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

    const deleteRowCount = await deleteUserById(id);

    res.json({
        message: 'User deleted successfully',
        count: deleteRowCount
    });
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

    return res.json({
        message: 'User Updated Successfully',
        data: users
    });
};