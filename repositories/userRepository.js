import fs from 'fs';
import path from 'path';

class UserRepository {
    constructor() {
        this.filePath = path.join(path.resolve(), 'config', 'database.json');
        this.data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
        this.users = this.data.users || [];
    }

    getAll() {
        return this.users;
    }

    getById(id) {
        return this.users.find(user => user.id === id);
    }

    create(user) {
        this.users.push(user);
        this._save();
        return user;
    }

    update(id, updatedUser) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users[index] = { ...this.users[index], ...updatedUser };
            this._save();
            return this.users[index];
        }
        return null;
    }

    delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            const deletedUser = this.users.splice(index, 1);
            this._save();
            return deletedUser;
        }
        return null;
    }

    _save() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2));
    }
}

export default new UserRepository();

