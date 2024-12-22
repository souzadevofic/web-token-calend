import User from './models/User.js';
import Event from './models/Events.js';

// Exemplo de como definir associações, se houver
User.hasMany(Event, { foreignKey: 'userId' });
Event.belongsTo(User, { foreignKey: 'userId' });

// Se houver outras associações, você pode adicioná-las aqui

export { User, Event };



