/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

"use strict";
import sqldb from "../sqldb";
import config from "./environment/";

export default function seedDatabaseIfNeeded() {
  if (config.seedDB) {
    let Sala = sqldb.Sala;
    let salas;
    let Persona = sqldb.Persona;
    let persona;

    return Sala.destroy({
      where: {}
    })
      .then(() => {
        return Sala.bulkCreate(
          [
            {
              nombre: "Gitlab GeoBolivia",
              urlRepositorio: "https://gitlab.geo.gob.bo",
              descripcion: "gitlab"
            },
            {
              nombre: "Gitlab",
              urlRepositorio: "https://about.gitlab.com",
              descripcion: "gitlab"
            },
            {
              nombre: "GitHub",
              urlRepositorio: "https://github.com",
              descripcion: "github"
            }
          ],
          {
            returning: true
          }
        );
      })
      .then(resultado => {
        salas = resultado;
        console.log("Se crearon salas de prueba");
        return Persona.destroy({
          where: {}
        });
      })
      .then(() => {
        return Persona.bulkCreate(
          [
            {
              nombre: "directora_nombre",
              cargo : "directora",
              fecha_nacimiento: "1",
              salario_hora:""
            },
            {
              nombre: "gerenta_nombre",
              cargo : "gerenta",
              fecha_nacimiento: "1",
              salario_hora:""
            },
            {
              nombre: "administrativas_nombre",
              cargo : "administrativa",
              fecha_nacimiento: "1",
              salario_hora:""
            },
            {
              nombre: "cajera_nombre",
              cargo : "cajera",
              fecha_nacimiento: "1",
              salario_hora:""
            },
          ],
          {
            returning: true
          }
        );
      })
      .catch(err => console.log("error populating things", err));
  }
}
