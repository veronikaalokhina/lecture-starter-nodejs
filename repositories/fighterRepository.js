import fs from 'fs';
import path from 'path';

class FighterRepository {
    constructor() {
        this.filePath = path.join(path.resolve(), 'config', 'database.json');
        this.data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
        this.fighters = this.data.fighters || [];
    }

    getAll() {
        return this.fighters;
    }

    getById(id) {
        return this.fighters.find(fighter => fighter.id === id);
    }

    create(fighter) {
        this.fighters.push(fighter);
        this._save();
        return fighter;
    }

    update(id, updatedFighter) {
        const index = this.fighters.findIndex(fighter => fighter.id === id);
        if (index !== -1) {
            this.fighters[index] = { ...this.fighters[index], ...updatedFighter };
            this._save();
            return this.fighters[index];
        }
        return null;
    }

    delete(id) {
        const index = this.fighters.findIndex(fighter => fighter.id === id);
        if (index !== -1) {
            const deletedFighter = this.fighters.splice(index, 1);
            this._save();
            return deletedFighter;
        }
        return null;
    }

    _save() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2));
    }
}

export default new FighterRepository();

