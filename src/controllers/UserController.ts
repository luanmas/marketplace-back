import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userRepository } from '../repositories/userRepository';
import { createUser } from '../models/userModel';


export const UserController = {
    create: async (req : Request, res: Response) => {
        const { name, email, password } = req.body;
        const user = await userRepository.getUser(email);
        
        if(user) return res.status(400).json({ message: "Email já registrado!" })

        const hashPassword = await bcrypt.hash(password, 10);

        await createUser({ name, email, password: hashPassword });

        res.status(201).json({
            message: "User created",
            name,
            email
        })
    },

    login: async (req : Request, res: Response) => {
        const { email, password } = req.body;

        const user = await userRepository.getUser(email);
        
        console.log("aaaaaaaaaa", user);
        console.log("bbbbbbbbbb", password);
        if(!user) return res.status(400).json({ message: "Email ou senha inválidos" })

        const verifyPass = await bcrypt.compare(password, user.password);

        if(!verifyPass) res.status(400).json({ message: "Email ou senha inválida" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, { expiresIn: '8h' });

        const { password:_, ...userLogin } = user;

        return res.json({
            token,
            user: userLogin
        });
    }
}



