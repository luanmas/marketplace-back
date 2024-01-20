import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { userRepository } from "../repositories/userRepository";

type JwtPayload = {
	id: number
}

export const authMiddleware = async (req : Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    const token = authorization.split(" ")[1];
    const { id } = jwt.verify(token, process.env.JWT_PASS) as JwtPayload;

    const user = await userRepository.getUserById(id);

    if(!user) res.status(400).json({ message: "Usuário não autorizado" });

    const { password:_, ...userLogged } = user;

    req.user = userLogged;

    next();
} 