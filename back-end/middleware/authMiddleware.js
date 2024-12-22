import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/jwt.js';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Token não fornecido' });

    try {
        const user = jwt.verify(token, jwtSecret);
        req.user = user;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Token inválido' });
    }
};

