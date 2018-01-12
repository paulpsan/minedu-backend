'user strict'
import Sequelize from 'sequelize';
import config from '../config/environment'

let db = {
    Sequelize,
    sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
}
db.Sala = db.sequelize.import('../models/sala');
db.Persona=db.sequelize.import('../models/persona');
//aqui agregamos inclusiones
/**
 * variable que ayuda con las inclusiones
 * se deben agregar las inclusiones con sus respectivos modelos al nombre de la inclusion
 * esto se usa para los query strings
 */

module.exports=db;
