import Genre from './Genre.js';
import Videogame from './Videogame.js';

Videogame.belongsToMany(Genre, {through: 'videogame_genre', timestamps:false})
Genre.belongsToMany(Videogame, {through: 'videogame_genre', timestamps:false})

export {Genre, Videogame}