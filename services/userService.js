import UserRepository from '../repositories/userRepository.js';
import User from '../models/user.js';

class UserService {
    getAllUsers() {
        return UserRepository.getAll();
    }

    getUserById(id) {
        return UserRepository.getById(id);
    }

    createUser(userData) {
        User.validate(userData);
        const user = new User(userData);
        return UserRepository.create(user);
    }

    updateUser(id, userData) {
        if (userData.id) {
            throw new Error('ID should not be included in the update data');
        }
        User.validate(userData);
        return UserRepository.update(id, userData);
    }

    deleteUser(id) {
        return UserRepository.delete(id);
    }
}

export default new UserService();


