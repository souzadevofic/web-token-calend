import { DataTypes } from "sequelize";
import configDB from "../config/db.js";
import bcrypt from 'bcrypt';

const User = configDB.define('User', {
    username: {
        type: DataTypes.STRING(30), 
        allowNull: false,           
        set(value) {
            this.setDataValue('username', value.toLowerCase());
        }
    },
    surname: {
        type: DataTypes.STRING(30), 
        allowNull: false,           
        set(value) {
            this.setDataValue('surname', value.toLowerCase());
        }
    },
    email: {
        type: DataTypes.STRING(50), 
        allowNull: false,           
        unique: true,              
        set(value) {
            this.setDataValue('email', value.toLowerCase());
        }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        set(value) {
            const saltRounds = 10;
            const hash = bcrypt.hashSync(value, saltRounds);
            this.setDataValue('password', hash);
        }
    }
}, {
    tableName: 'users', 
    timestamps: true,   // Cria campos createdAt e updatedAt automaticamente
});

export default User;

