import {
    addGroup,
    findAllGroups,
    deleteGroupById,
    findOneGroup,
    updateGroupById,
} from '../services/group-services.js';

export const createGroup = async (req, res) => {
    try {
        const newGroup = await addGroup(req.body);

        if (newGroup) {
            return res.json(newGroup);
        }
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }

};

export const getAllGroups = async (req, res) => {
    const groups = await findAllGroups();

    res.json(groups);
};

export const getOneGroup = async (req, res) => {
    const {
        id
    } = req.params;

    const group = await findOneGroup(id);

    res.json(
        group
    );
};

export const updateGroup = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        name,
        permission
    } = req.body;

    const updatedGroup = await updateGroupById(id, name, permission);

    res.json(updatedGroup);

};

export const deleteGroup = async (req, res) => {
    const {
        id
    } = req.params;

    await deleteGroupById(id);

    res.status(202);
};