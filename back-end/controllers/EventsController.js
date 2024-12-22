import Events from '../models/Events.js';

// Criar um novo evento
export const createEvents = async (req, res) => {
    try {
        const { name, data, local, horarioinicio, horariotermino, descricao } = req.body;

        // Validar que horário de início é menor que o de término
        if (horarioinicio >= horariotermino) {
            return res.status(400).json({ error: 'O horário de início deve ser anterior ao horário de término.' });
        }

        const newEvent = await Events.create({ name, data, local, horarioinicio, horariotermino, descricao });
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Buscar todos os eventos
export const getAllEvents = async (req, res) => {
    try {
        const events = await Events.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar um evento por ID
export const getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Events.findByPk(id);
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({ message: 'Evento não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar um evento por ID
export const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { horarioinicio, horariotermino } = req.body;

        // Validar que horário de início é menor que o de término
        if (horarioinicio && horariotermino && horarioinicio >= horariotermino) {
            return res.status(400).json({ error: 'O horário de início deve ser anterior ao horário de término.' });
        }

        const [updated] = await Events.update(req.body, { where: { id } });
        if (updated) {
            const updatedEvent = await Events.findByPk(id);
            res.status(200).json(updatedEvent);
        } else {
            res.status(404).json({ message: 'Evento não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Deletar um evento por ID
export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Events.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Evento deletado com sucesso' });
        } else {
            res.status(404).json({ message: 'Evento não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
