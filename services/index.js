import User from "../models/Users.js";

export const findAllUsers = async id => {
    if (id) {
        return await User.findAll({
            attributes: ['id', 'login', 'password', 'age'],
            where: {
                id
            }
        });
    }
    return await User.findAll();
};

export const addUser = async ({
    login,
    password,
    age
}) => {
    return await User.create({
        login,
        password,
        age
    }, {
        fields: ["login", "password", "age"]
    });
};

export const findOneUser = async id =>
    await User.findOne({
        where: {
            id
        }
    });

export const deleteUserById = async id =>
    await User.destroy({
        where: {
            id
        }
    });