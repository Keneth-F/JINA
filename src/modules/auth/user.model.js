const users = [{ email: 'test@example.us' }]

export class User {
    static async signUp({ email }) {
        const user = users.find(user => user?.email == email)
        if (user)
            throw { status: 400, message: "The email is already in use" }
        users.push({ email })
        return Promise.resolve({ email })
    }
    static async signIn({ email }) {

        const user = users.find(user => user.email == email)
        console.log(users, user, email)
        if (!user)
            throw { status: 400, message: "The email does not exist" }
        return Promise.resolve({ email })
    };
    static async signOut({ email }) {
        const userIndex = users.findIndex(user => user.email == email)
        if (userIndex != -1)
            users.splice(userIndex, 1)
        return Promise.resolve(null)
    };

}