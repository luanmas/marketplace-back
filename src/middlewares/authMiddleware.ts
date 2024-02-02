import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/userRepository";
import jwt from 'jsonwebtoken';

type JwtPayload = {
	id: number;
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if(!authorization) return res.status(403).json({ message: "Usuário não autorizado" })

    const token = authorization.split(" ")[1];
    const { id } = jwt.verify(token, process.env.JWT_PASS) as JwtPayload;

    const user = await userRepository.findOneBy({ id });

    if(!user) return res.status(403).json({ message: "Usuário não autorizado" });

    const { password:_, ...userLogged } = user;

    res.status(200).json({
        message: "OK!",
        userLogged  
    });

    next();
} 