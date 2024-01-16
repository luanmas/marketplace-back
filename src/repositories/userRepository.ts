import { connection } from '../database/connection';

export const userRepository = {
    getUser: async (email : string) => {
        const query = 'SELECT email FROM users WHERE email = ?';
        const user = await connection.query(query, [email]);
    
        return user;
    }
}