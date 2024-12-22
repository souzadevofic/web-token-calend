import { DataTypes } from "sequelize";
import configDB from "../config/db.js";

const Events = configDB.define('Events', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    local: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    horarioinicio: {
        type: DataTypes.STRING(5), // Formato HH:MM
        allowNull: false,
        validate: {
            is: /^([0-1]\d|2[0-3]):([0-5]\d)$/, // Valida formato HH:MM
        },
    },
    horariotermino: {
        type: DataTypes.STRING(5), // Formato HH:MM
        allowNull: false,
        validate: {
            is: /^([0-1]\d|2[0-3]):([0-5]\d)$/, // Valida formato HH:MM
        },
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    tableName: 'events',
    timestamps: true,
});

// Validação customizada para garantir que horarioinicio < horariotermino
Events.beforeCreate((event) => {
    if (event.horarioinicio >= event.horariotermino) {
        throw new Error('O horário de início deve ser anterior ao horário de término.');
    }
});

export default Events;
