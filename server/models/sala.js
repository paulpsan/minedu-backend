'use strict';

export default function (sequelize, DataTypes) {
  return sequelize.define('Proyecto', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    reserva: {
      type: DataTypes.JSONB,
      defaultValue:[{
        usuario: "",
        fecha: "",
        hora: "",
      }]
    }
  });
}
