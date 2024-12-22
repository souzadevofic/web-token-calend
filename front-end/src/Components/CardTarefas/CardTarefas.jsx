import './CardTarefas.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function CardTarefas({ onEdit, onDelete }) {
    const [events, setEvents] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedEvent, setEditedEvent] = useState(null);

    // Função para buscar eventos da API
    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/events'); // Substitua pela URL correta da sua API
            setEvents(response.data);
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
        }
    };

    useEffect(() => {
        fetchEvents(); // Busca eventos apenas ao montar o componente
    }, []); // Lista de dependências vazia para evitar loop infinito

    const handleEditClick = (index, event) => {
        setEditingIndex(index);
        setEditedEvent({
            name: event.name,
            date: event.data.split('T')[0], // Formatação da data para o formato yyyy-mm-dd
            location: event.local,
            startTime: event.horarioinicio,
            endTime: event.horariotermino,
            description: event.descricao
        });
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`http://localhost:3000/api/events/${events[editingIndex].id}`, {
                name: editedEvent.name,
                data: editedEvent.date,
                local: editedEvent.location,
                horarioinicio: editedEvent.startTime,
                horariotermino: editedEvent.endTime,
                descricao: editedEvent.description
            });

            // Atualiza a lista de eventos localmente sem fazer nova requisição
            const updatedEvents = [...events];
            updatedEvents[editingIndex] = {
                ...events[editingIndex],
                ...editedEvent
            };
            setEvents(updatedEvents);

            // Chama a função onEdit passando os dados atualizados
            onEdit(editingIndex, editedEvent);

            // Reseta o estado de edição
            setEditingIndex(null);
            setEditedEvent(null);
        } catch (error) {
            console.error('Erro ao salvar evento:', error);
        }
    };

    const handleCancelClick = () => {
        setEditingIndex(null);
        setEditedEvent(null);
    };

    const handleDeleteClick = async (index) => {
        try {
            const eventToDelete = events[index];
            await axios.delete(`http://localhost:3000/api/events/${eventToDelete.id}`);

            // Atualiza o estado local
            const updatedEvents = events.filter((_, i) => i !== index);
            setEvents(updatedEvents);

            // Confirma a exclusão com o callback
            onDelete(index);
        } catch (error) {
            console.error('Erro ao excluir evento:', error);
        }
    };

    const handleAddNewEvent = (newEvent) => {
        setEvents((prevEvents) => [newEvent, ...prevEvents]);
        // Não precisa chamar fetchEvents(); o estado já está atualizado
    };

    return (
        <div className="card-container">
            {events.map((event, index) => (
                <div className="card card-tarefas" key={index}>
                    <div className="card-body">
                        {editingIndex === index ? (
                            <>
                                <h5 className="card-title">
                                    <input
                                        type="text"
                                        value={editedEvent.name}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, name: e.target.value })}
                                    />
                                </h5>
                                <span>
                                    Dia: <input
                                        type="date"
                                        value={editedEvent.date}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, date: e.target.value })}
                                    />
                                </span>
                                <br />
                                <span>
                                    Local: <input
                                        type="text"
                                        value={editedEvent.location}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, location: e.target.value })}
                                    />
                                </span>
                                <br />
                                <span>
                                    Horário:
                                    <input
                                        type="time"
                                        value={editedEvent.startTime}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, startTime: e.target.value })}
                                    />
                                    - 
                                    <input
                                        type="time"
                                        value={editedEvent.endTime}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, endTime: e.target.value })}
                                    />
                                </span>
                                <p className="card-text">
                                    Descrição: <textarea
                                        value={editedEvent.description}
                                        onChange={(e) => setEditedEvent({ ...editedEvent, description: e.target.value })}
                                    />
                                </p>
                                <div className='container-btn-edition'>
                                    <button className="btn btn-success" onClick={handleSaveClick}>
                                        Salvar
                                    </button>
                                    <button className="btn btn-secondary" onClick={handleCancelClick}>
                                        Cancelar
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='container-card-efetuado'>
                                    <div className='text-conteudo'>
                                        <h5>{event.name}</h5>
                                        <span>Dia: {event.data.split('T')[0]}</span>
                                        <br />
                                        <span>Local: {event.local}</span>
                                        <br />
                                        <span>
                                            Horário: {event.horarioinicio} - {event.horariotermino}
                                        </span>
                                        <p className="card-text">Descrição: {event.descricao}</p>
                                    </div>
                                    <div className='container-btn-card'>
                                        <button className="btn btn-primary" onClick={() => handleEditClick(index, event)}>
                                            Editar
                                        </button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteClick(index)}>
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardTarefas;







