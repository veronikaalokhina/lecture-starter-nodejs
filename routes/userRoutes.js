import express from 'express';
import UserService from '../services/userService.js';
import { responseMiddleware } from '../middlewares/responseMiddleware.js';

const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        const users = UserService.getAllUsers();
        res.data = users;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        const user = UserService.getUserById(req.params.id);
        if (!user) {
            throw new Error('User not found');
        }
        res.data = user;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

router.post('/', (req, res, next) => {
    try {
        const newUser = UserService.createUser(req.body);
        res.data = newUser;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

router.patch('/:id', (req, res, next) => {
    try {
        const updatedUser = UserService.updateUser(req.params.id, req.body);
        if (!updatedUser) {
            throw new Error('User not found');
        }
        res.data = updatedUser;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    try {
        const deletedUser = UserService.deleteUser(req.params.id);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        res.data = deletedUser;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

export default router;
