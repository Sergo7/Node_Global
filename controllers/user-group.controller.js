// import {
//     setUserToGroup
// } from '../services/group-services.js';
import {
    User
} from '../models/Users.js';
import Group from '../models/Groups.js';

export const addUsersToGroup = async (req, res) => {
    try {
        console.log("Body Params: ", req.body);
        let group = await Group.create({
            name: req.body.name,
        });

        let user = await User.findById(req.body.userid);

        //populate GroupUser join table
        await group.addUser(user);

        let usersGroups = await User.findById(req.body.userid, {
            include: [{
                model: Group,
                as: 'groups',
                attributes: ['id', 'name']
            }]
        })
        res.status(201).send(usersGroups);
    } catch (error) {
        console.error("Group creation server error: ", error);
        res.status(500).send(error)
    };
};