'use strict'

import express from 'express';
import config from './config/environment'
import Sequelize from 'sequelize';
import sqldb from './sqldb'
import seedDatabaseIfNeeded from './config/seed';


import { User } from './sqldb'


const app = express();

console.log(process.env.NODE_ENV);

require('./config/express').default(app);
require('./routes').default(app);

sqldb.sequelize.sync()
.then(seedDatabaseIfNeeded)
.then(()=>{
    app.listen(config.port,config.ip, ()=>{
        console.log('Url: '+config.ip);
        console.log("App listening on port " + config.port);
    });
})
.catch((error)=>{
    console.log('Server failed to start due to error: %s', error);
});



module.exports=app;
