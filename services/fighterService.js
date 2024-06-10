import FighterRepository from '../repositories/fighterRepository.js';
import Fighter from '../models/fighter.js';

class FighterService {
    getAllFighters() {
        return FighterRepository.getAll();
    }

    getFighterById(id) {
        return FighterRepository.getById(id);
    }

    createFighter(fighterData) {
        Fighter.validate(fighterData);
        const fighter = new Fighter(fighterData);
        return FighterRepository.create(fighter);
    }

    updateFighter(id, fighterData) {
        if (fighterData.id) {
            throw new Error('ID should not be included in the update data');
        }
        Fighter.validate(fighterData);
        return FighterRepository.update(id, fighterData);
    }

    deleteFighter(id) {
        return FighterRepository.delete(id);
    }
}

export default new FighterService();
