import { connection } from '../database/connection';

export const createUser = async ({ name, email, password } : { name: string; email: string; password: string }) => {

    const query = 'INSERT INTO users(username, email, password) VALUES (?, ?, ?)';
    const createdUser = await connection.query(query, [name, email, password]);

    return createdUser;
}