class User {
    constructor({ id, email, phoneNumber, password }) {
        this.id = id;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }

    static validate(user) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        const phoneRegex = /^\+380\d{9}$/;

        if (!user.email || !emailRegex.test(user.email)) {
            throw new Error('Invalid email');
        }

        if (!user.phoneNumber || !phoneRegex.test(user.phoneNumber)) {
            throw new Error('Invalid phone number');
        }

        if (!user.password || user.password.length < 3) {
            throw new Error('Invalid password');
        }

        return true;
    }
}

export default User;


