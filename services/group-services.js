import Group from "../models/Groups.js";
import {
    User
} from "../models/Users.js";


export const addGroup = async ({
    name,
    permission,
    userid
}) => {
    return await Group.create({
        name,
        permission,
        userid
    }, {
        fields: ["name", "permission", "userid"]
    });
};

export const findAllGroups = async () => {
    return await Group.findAll({
        attributes: ['id', 'userid', 'name', 'permission'],
        order: [
            'id'
        ]
    });
};

export const deleteGroupById = async id => {
    return await Group.destroy({
        where: {
            id
        }
    });
};

export const findOneGroup = async id => {
    return await Group.findOne({
        attributes: ['name', 'userid', 'permission', 'id'],
        where: {
            id
        }
    });
};

export const updateGroupById = async (
    userid,
    name,
    permission,
    id
) => {
    return await Group.update({
        userid,
        name,
        permission,
    }, {
        where: {
            id
        }
    });
};


// export const setUserToGroup = async (userid, groupid) => {
//     try {
//         console.log("Body Params: ", req.body);
//         let group = await Group.create({
//             name: groupid,
//         });

//         let user = await User.findById(userid);

//         //populate GroupUser join table
//         await group.addUser(user);

//         let usersGroups = await User.findById(req.body.userId, {
//             include: [{
//                 model: Group,
//                 as: 'groups',
//                 attributes: ['id', 'name']
//             }]
//         })

//         res.status(201).send(usersGroups);
//     } catch (error) {
//         console.error("Group creation server error: ", error);
//         res.status(500).send(error)
//     };

// };