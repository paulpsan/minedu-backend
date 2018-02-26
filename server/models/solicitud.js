'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define("Solicitudes", {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNulll: false
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNulll: false
    }
  });
}
