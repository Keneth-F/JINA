const users = [
    {
        email: "kgf@email.com"
    }
]

export class User {
    static async signUp({ username, email, password }) {
        const user = users.find(user => user.email == email)
        if (user)
            throw { status: 400, message: "The email is already in use" }
        users.push(user)
        return user
    }
    static async signIn({ email, password }) {
        const user = users.find(user => user.email == email)
        if (!user)
            throw { status: 400, message: "The email does not exist" }
        return user
    };
    static async signOut({ email, password }) {
        return null
    };

}