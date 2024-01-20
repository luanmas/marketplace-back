import { connection } from '../database/connection';
import { RowDataPacket } from 'mysql2';
import { IUser } from '../types/user';

export const userRepository = {
    getUserByEmail: async (email : string): Promise<IUser | undefined> => {
        const query = 'SELECT username, email, user_id, password FROM users WHERE email = ?';
        const [rows] = await connection.query<RowDataPacket[]>(query, [email]);
    
        if(rows.length > 0) {
            const { email, username, user_id, password } = rows[0]; 
            return { email, name: username, id: user_id, password };
        }

        return undefined;
    },

    getUserById: async (id : number): Promise<IUser | undefined> => {
        const query = 'SELECT username, email, user_id, password FROM users WHERE user_id = ?';
        const [rows] = await connection.query<RowDataPacket[]>(query, [id]);
    
        if(rows.length > 0) {
            const { email, username, user_id, password } = rows[0]; 
            return { email, name: username, id: user_id, password };
        }

        return undefined;
    }
}