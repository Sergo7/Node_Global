import User from "../models/Users.js";

// Get all Users
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.json({
            data: users
        });
    } catch (e) {
        console.log(e);
    }

};

// Create and save new User
export const createUser = async (req, res) => {
    const {
        login,
        password,
        age
    } = req.body;

    try {
        let newUser = await User.create({
            login,
            password,
            age
        }, {
            fields: ["login", "password", "age"]
        });

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

    const user = await User.findOne({
        where: {
            id
        }
    });

    res.json(user);
};

// Delete User
export const deleteUser = async (req, res) => {
    const {
        id
    } = req.params;
    const deleteRowCount = await User.destroy({
        where: {
            id
        }
    });

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

    const users = await User.findAll({
        attributes: ['id', 'login', 'password', 'age'],
        where: {
            id
        }
    });

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