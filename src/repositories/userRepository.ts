import { connection } from '../database/connection';
import { RowDataPacket } from 'mysql2';

export const userRepository = {
    getUser: async (email : string): Promise<{ email: boolean }> => {
        const query = 'SELECT email FROM users WHERE email = ?';
        const [rows] = await connection.query<RowDataPacket[]>(query, [email]);
    
        if(rows.length > 0) {
            return { email : true }
        }

        return { email : false };
    }
}