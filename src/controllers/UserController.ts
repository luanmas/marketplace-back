import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userRepository } from '../repositories/userRepository';

interface authProfile extends Request {
    name: string;
    email: string;
}

export const UserController = {
    create: async (req : Request, res: Response) => {
        const { name, email, password } = req.body;
        const user = await userRepository.findOneBy({ email });
        
        if(user) return res.status(400).json({ message: "Email já registrado!" })

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = userRepository.create({ name, email, password: hashPassword });

        await userRepository.save(newUser);

        const { password:_, ...userCreated } = newUser;

        res.status(201).json({
            message: "User created",
            userCreated
        })
    },

    login: async (req : Request, res: Response) => {
        const { email, password } = req.body;

        const user = await userRepository.findOneBy({ email });
        
        if(!user) return res.status(400).json({ message: "Email ou senha inválidos" })

        const verifyPass = await bcrypt.compare(password, user.password);

        if(!verifyPass) res.status(400).json({ message: "Email ou senha inválida" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, { expiresIn: '8h' });

        const { password:_, ...userLogin } = user;

        return res.json({
            token,
            user: userLogin
        });
    },

    // getProfile: async (req : authProfile, res: Response) => {
    //     const userLogged = req.user;

    //     res.json({
    //         user: userLogged
    //     })
    // }
}



