import React, { useState, useEffect } from 'react';
import './EventForm.css';
import axios from '../../../services/api'; // Importação da instância configurada do Axios

export function EventForm({ onSave, selectedDate }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (selectedDate) {
            // Convertemos o formato dd/mm/aaaa para YYYY-MM-DD para o input date
            const [day, month, year] = selectedDate.split('/');
            const isoDate = `${year}-${month}-${day}`;
            setDate(isoDate);
        }
    }, [selectedDate]);

    const handleSubmit = async () => {
        if (name && location && startTime && endTime && date) {
            try {
                // Validação do horário
                const startHour = parseInt(startTime.split(':')[0], 10);
                const endHour = parseInt(endTime.split(':')[0], 10);

                if (startHour >= 18 && startHour <= 24 && endHour >= 0 && endHour <= 6) {
                    setError('O horário de término deve ser após o horário de início e dentro do intervalo permitido.');
                    return;
                }

                // Enviando dados para a API
                const response = await axios.post('http://localhost:3000/api/events', {
                    name,
                    local: location, // Correspondendo ao campo `local` no modelo
                    horarioinicio: startTime,
                    horariotermino: endTime,
                    descricao: description,
                    data: date, // ISO date format YYYY-MM-DD
                });

                setSuccessMessage('Evento criado com sucesso!');
                setError(null);
                setName('');
                setLocation('');
                setStartTime('');
                setEndTime('');
                setDescription('');
                setDate('');

                if (onSave) onSave(response.data); // Callback para salvar localmente (se necessário)
                location.reload();
            } catch (err) {
                setError(err.response?.data?.message || 'Erro ao criar o evento.');
                setSuccessMessage(null);
                console.error('Erro ao criar o evento:', err.response?.data || err.message);
            }
        } else {
            alert('Por favor, preencha todos os campos obrigatórios!');
        }
    };

    return (
        <div className="templete-event">
            <h3>Criar Evento</h3>

            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            <h2>Nome:</h2>
            <input
                className="name-event"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h2>Local:</h2>
            <input
                className="name-event"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <h2>Data:</h2>
            <input
                className="horario"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <h2>Início:</h2>
            <input
                className="horario"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
            />

            <h2>Término:</h2>
            <input
                className="horario"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
            />

            <h2>Descrição:</h2>
            <textarea
                name="mensagem"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button
                type="button"
                className="btn btn-success"
                onClick={handleSubmit}
            >
                Salvar
            </button>
        </div>
    );
}

export default EventForm;

