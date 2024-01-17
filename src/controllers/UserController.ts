import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import { userRepository } from '../repositories/userRepository';
import { createUser } from '../models/userModel';


export const UserController = {
    create: async (req : Request, res: Response) => {
        const { name, email, password } = req.body;
        const userExist = await userRepository.getUser(email);
        
        if(userExist) return res.status(400).json({ message: "Email já registrado!" })

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await createUser({ name, email, password: hashPassword })

        res.status(201).json({
            message: "User created",
            newUser
        })
    }
}



