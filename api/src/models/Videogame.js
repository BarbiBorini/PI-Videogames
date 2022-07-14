const { DataTypes } = require('sequelize');
const {sequelize} = require('../db.js');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      
    }
  }, {timestamps:false});
};


//   // defino el modelo
//   const Videogame = sequelize.define('Videogame', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });


// export default Videogame; 