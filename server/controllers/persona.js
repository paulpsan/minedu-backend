"use strict";
import jsonpatch from "fast-json-patch";
import { Persona } from "../sqldb";
import SequelizeHelper from "../components/sequelize-helper";
import ProxyService from "../components/repository-proxy/proxy-service";
import GitLab from "../components/repository-proxy/repositories/gitlab";
import _ from "lodash";
import { createSecureContext } from "tls";
function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch (err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy().then(() => {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

export function index(req, res) {
  return Persona.findAndCountAll(req.opciones)
    .then(datos => {
      console.log(datos);
      return datos;
    })
    .then(respondWithResult(res))
    .catch(handleError(res));
}
export function create(req, res) {
  console.log(req.body);
  if (req.body.cargo == "cajera") {
    req.body.salario_hora = 20;
    req.body.salario_mes=20*8*25
    //8horas por dia 25 dias habiles cajeras y gerentas
  } else if (req.body.cargo == "administrativa") {
    req.body.salario_hora = 28;
    req.body.salario_mes=28*8*20
  } else if (req.body.cargo == "gerenta") {
    req.body.salario_hora = 40;
    req.body.salario_mes=40*8*25
  } else if (req.body.cargo == "directora") {
    req.body.salario_hora = 80;
    req.body.salario_mes=80*8*20
  }
  return Persona.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}
