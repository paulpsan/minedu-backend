"use strict";

export default function(sequelize, DataType) {
  return sequelize.define("Persona", {
    _id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataType.STRING(100),
      allowNulll: false
    },
    email: {
      type: DataType.STRING(100),
      allowNulll: false
    },
    reserva: {
      type: DataType.JSONB,
      defaultValue:{
          sala: "",
          fecha: "",
          hora: "",
        }
    }
  });
}
