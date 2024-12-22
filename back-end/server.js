import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import events from './routes/EventsRoutes.js'
import swagger from './config/swagger.js';

const app = express();

// Permite que o express interprete o corpo da requisição como JSON
app.use(express.json());

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:5173', // Adicione a URL do seu frontend aqui
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rotas de usuário
app.use('/api', userRoutes);
app.use('/api', events)

// Swagger
swagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

export default app;

