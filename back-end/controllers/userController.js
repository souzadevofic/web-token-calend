import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtSecret, jwtExpiry } from '../config/jwt.js';

// Função para autenticar um usuário
export const authenticateUser = async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }

        try {
            // Verificar se o usuário existe
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ message: 'Usuário não encontrado' });
            }

            // Verificar a senha
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            // Gerar o token JWT
            const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: jwtExpiry });

            // Responder com o token JWT
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
};


// Criar um novo usuário
export const createUser = async (req, res) => {
    try {
        const { username, surname, email, password } = req.body;
        const newUser = await User.create({ username, surname, email, password });

        // Gerar o token JWT
        const token = jwt.sign({ id: newUser.id }, jwtSecret, { expiresIn: jwtExpiry });

        res.status(201).json({ user: newUser, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Buscar todos os usuários
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar um usuário por ID
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params; // Obtém o e-mail dos parâmetros da rota
        const user = await User.findOne({
            where: { email } // Busca pelo e-mail no banco de dados
        });
        
        if (user) {
            res.status(200).json(user); // Retorna o usuário encontrado
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' }); // Caso não encontre
        }
    } catch (error) {
        res.status(500).json({ error: error.message }); // Trata erros inesperados
    }
};


// Atualizar um usuário por ID
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedUser = await User.findByPk(id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Deletar um usuário por ID
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Usuário deletado com sucesso' });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
