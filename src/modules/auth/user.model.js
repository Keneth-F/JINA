const users = [
    {
        email: "kgf@email.com"
    }
]


export class User {
    static async register({ username, email, password }) {
        try {
            const user = users.find(user => user.email == email)


            if (user)
                return res.status(400).json({
                    message: ["The email is already in use"],
                });

            // hashing the password
            // const passwordHash = await bcrypt.hash(password, 10);

            // creating the user
            users.push(user)


        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}