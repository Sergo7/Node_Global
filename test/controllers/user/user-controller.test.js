import {
    getUsers,
    createUser,
    getOneUser,
    deleteUser,
    updateUser
} from '../../../controllers/users.controller.js';


jest.mock('../../../services/index.js', () => {
    const mockUsers = [{
            id: '1',
            login: 'login_1',
            password: 'password_1',
            age: 20,
        },
        {
            id: '2',
            login: 'login_2',
            password: 'password_2',
            age: 25,
        },
    ];

    return {
        mockUsers,
        findAllUsers: jest.fn().mockResolvedValue(mockUsers),
        findOneUser: jest.fn().mockResolvedValue(mockUsers[0]),
        addUser: jest.fn().mockImplementation(({
            login,
            password,
            age
        }) => ({
            ...mockUsers[0],
            login,
            password,
            age
        })),
        deleteUserById: jest.fn(),
    }
});

const mockModule = jest.requireMock('../../../services/index.js');

describe('User controller', () => {

    const {
        mockUsers
    } = mockModule;
    it('method getUsers should return users', async () => {
        const json = jest.fn();

        const req = {};
        const res = {
            json
        };

        await getUsers(req, res);

        expect(json).toBeCalledWith(mockUsers);
    });

    it('method createUser should create user', async () => {
        const {
            addUser
        } = mockModule;
        const json = jest.fn();

        const req = {
            body: {
                login: 'login',
                password: 'password',
                age: 25
            }
        };
        const res = {
            json
        }

        await createUser(req, res);

        expect(addUser).toBeCalledWith({
            login: 'login',
            password: 'password',
            age: 25
        });
        expect(json).toBeCalledWith({
            ...mockUsers[0],
            login: 'login',
            password: 'password',
            age: 25
        });
    });

    it('method getOneUser should return user by id', async () => {

        const {
            findOneUser
        } = mockModule;

        findOneUser.mockResolvedValue(mockUsers[0]);

        const json = jest.fn();

        const req = {
            params: {
                id: '5'
            }
        };
        const res = {
            json
        };

        await getOneUser(req, res);

        expect(findOneUser).toBeCalledWith('5');
        expect(json).toBeCalledWith(mockUsers[0]);
    });

    it('method deleteUser should delete user by id', async () => {
        const {
            deleteUserById
        } = mockModule;

        const status = jest.fn().mockReturnThis();

        deleteUserById.mockResolvedValue(true);

        const req = {
            params: {
                id: '31'
            }
        };
        const res = {
            status
        }

        await deleteUser(req, res);

        expect(deleteUserById).toBeCalledWith('31');
        expect(status).toBeCalledWith(202);
    });

    it('method updateUser should update user by id', async () => {
        const {
            findAllUsers
        } = mockModule;

        findAllUsers.mockResolvedValue({
            ...mockUsers[0],
            login: 'new_login',
            password: 'new_password',
            age: '27'
        });

        const json = jest.fn();
        const req = {
            params: {
                id: '32'
            },
            body: {
                login: 'new_login',
                password: 'new_password',
                age: '27'
            }
        };
        const res = {
            json,
        }

        await updateUser(req, res);

        expect(json).toBeCalledWith({
            ...mockUsers[0],
            login: 'new_login',
            password: 'new_password',
            age: '27'
        });
    });

});