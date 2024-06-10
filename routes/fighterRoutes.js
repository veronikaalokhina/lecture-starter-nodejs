import express from 'express';
import FighterService from '../services/fighterService.js';
import { responseMiddleware } from '../middlewares/responseMiddleware.js';

const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        const fighters = FighterService.getAllFighters();
        res.data = fighters;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        const fighter = FighterService.getFighterById(req.params.id);
        if (!fighter) {
            throw new Error('Fighter not found');
        }
        res.data = fighter;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

router.post('/', (req, res, next) => {
    try {
        const newFighter = FighterService.createFighter(req.body);
        res.data = newFighter;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

router.patch('/:id', (req, res, next) => {
    try {
        const updatedFighter = FighterService.updateFighter(req.params.id, req.body);
        if (!updatedFighter) {
            throw new Error('Fighter not found');
        }
        res.data = updatedFighter;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    try {
        const deletedFighter = FighterService.deleteFighter(req.params.id);
        if (!deletedFighter) {
            throw new Error('Fighter not found');
        }
        res.data = deletedFighter;
    } catch (error) {
        res.error = error;
    }
    next();
}, responseMiddleware);

export default router;
