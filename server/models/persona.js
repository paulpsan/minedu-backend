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
    cargo: {
      type: DataType.STRING(100),
      allowNulll: false
    },
    salario_hora: {
      type: DataType.INTEGER,
      allowNulll: false
    },
    salario_mes: {
        type: DataType.INTEGER,
        allowNulll: false
      },

    fecha_nacimiento: {
      type: DataType.DATE,
      allowNulll: false
    }
  });
  //   persona.associate = models => {
  //     persona.hasMany(models.hobbie, {
  //       as: "hobbies",
  //       foreignKey: { name: "fid_persona", allowNull: false }
  //     });
  //   };
}
