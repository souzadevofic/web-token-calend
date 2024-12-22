import User from '../models/User.js';
import Events from '../models/Events.js'; // Certifique-se de importar o modelo correto

async function insertData() {
    try {
        // INSERT INTO users ...
        const user = await User.create({
            username: 'Vanessa',
            surname: 'Souza',
            email: 'maria12345@gmail.com',
            password: '12345' 
        });
        console.log(`Novo usuário criado: ${user.toJSON()}`);

        // INSERT INTO events ...
        const event = await Events.create({
            name: 'Workshop de JavaScript',
            data: '2023-12-25', // Data no formato ISO
            local: 'Auditório Principal',
            horarioinicio: '14:00',
            horariotermino: '16:00',
            descricao: 'Workshop focado em desenvolvimento com JavaScript',
        });
        console.log(`Novo evento criado: ${event.toJSON()}`);

    } catch (error) {
        console.error('Erro ao inserir dados iniciais:', error);
    }
}

export default insertData;
