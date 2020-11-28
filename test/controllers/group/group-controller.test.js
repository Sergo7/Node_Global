import {
    createGroup,
    getAllGroups,
    getOneGroup,
    deleteGroup
} from '../../../controllers/group.controller.js';


jest.mock('../../../services/group-services.js', () => {
    const mockGroups = [{
            id: '1',
            name: 'group_1',
            permission: ['READ', 'WRITE'],
        },
        {
            id: '2',
            name: 'group_2',
            permission: ['READ', 'DELETE'],
        },
    ];

    return {
        mockGroups,
        findAllGroups: jest.fn().mockResolvedValue(mockGroups),
        findOneGroup: jest.fn().mockResolvedValue(mockGroups[0]),
        addGroup: jest.fn().mockImplementation(({
            name,
            permission
        }) => ({
            id: '5',
            name,
            permission
        })),
        deleteGroupById: jest.fn(),
    }
});

const mockModule = jest.requireMock('../../../services/group-services.js');

describe('Group controller', () => {

    const {
        mockGroups
    } = mockModule;

    it('method addGroup should create group with new data', async () => {
        const {
            addGroup
        } = mockModule;
        const status = jest.fn().mockReturnThis();
        const json = jest.fn();

        const req = {
            body: {
                name: 'group_1',
                permission: ['READ', 'WRITE']
            }
        };
        const res = {
            status,
            json,
        }

        await createGroup(req, res);

        expect(addGroup).toBeCalledWith({
            name: 'group_1',
            permission: ['READ', 'WRITE']
        });
        expect(json).toBeCalledWith({
            id: '5',
            name: 'group_1',
            permission: ['READ', 'WRITE']
        });
    });


    it('method getAllGroups should return groups', async () => {
        const json = jest.fn();
        const req = {};

        const res = {
            json
        };

        await getAllGroups(req, res);

        expect(json).toBeCalledWith(mockGroups);
    });


    it('method getOneGroup should return group by id', async () => {
        const {
            findOneGroup
        } = mockModule;

        const json = jest.fn();

        const req = {
            params: {
                id: '29'
            }
        };
        const res = {
            json
        };

        await getOneGroup(req, res);

        expect(findOneGroup).toBeCalledWith('29');
        expect(json).toBeCalledWith(mockGroups[0]);
    });

    it('method deleteUser should delete user by id', async () => {
        const {
            deleteGroupById
        } = mockModule;

        const status = jest.fn().mockReturnThis();

        deleteGroupById.mockResolvedValue(true);

        const req = {
            params: {
                id: '21'
            }
        };
        const res = {
            status
        }

        await deleteGroup(req, res);

        expect(deleteGroupById).toBeCalledWith('21');
        expect(status).toBeCalledWith(202);
    });

});