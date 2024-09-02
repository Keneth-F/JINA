import db from "../db/index.js";

export class User {
    static async signUp({ email }) {
        const [exist] = await db.query(`
            SELECT * FROM users WHERE email = ?;
            `, [email]);
        if (exist.length > 0)
            throw { status: 400, message: "The email is already in use" }
        const [results] = await db.query(`
            INSERT INTO users (email) VALUES (?);
        `, [email]);
        if (results.affectedRows < 0)
            throw { message: "Error interno del servidor" }
        return { email }
    }

    static async signIn({ email }) {
        const [results] = await db.query(`
            SELECT * FROM users WHERE email = ?;
        `, [email]);
        if (results.length != 1)
            throw { status: 400, message: "The email does not exist" }
        return results[0]
    }

    static async signOut({ email }) {
        return Promise.resolve(null)
    }
}