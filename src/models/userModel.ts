import { connection } from '../database/connection';

export const createUser = async ({ name, email, hashPassword } : { name: string; email: string; hashPassword: string }) => {

    const query = 'INSERT INTO users(username, email, password) VALUES (?, ?, ?)';
    const createdUser = await connection.query(query, [name, email, hashPassword]);

    return createdUser;
}