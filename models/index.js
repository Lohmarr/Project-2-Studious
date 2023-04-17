const User = require('./User');
const Genre = require('./Genre');
const Songs = require('./Songs');

Genre.hasMany(Songs, {
  foreignKey: 'genre_id',
});

Songs.belongsTo(Genre, {
  foreignKey: 'genre_id',
});

module.exports = { User, Genre, Songs };
