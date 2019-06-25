import express from 'express'
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose'
import { databaseConfig } from './config'

class Server {
    
    constructor() {
        this.app = express();
        this.config();
    }

    config(){

        this.app.use(bodyParser.json()); // support json encoded bodies
        this.app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

        //this.app.use(express.static(path.join(__dirname, '../../dist')));

        mongoose.connect(`mongodb://${databaseConfig.ip}:${databaseConfig.port}/${databaseConfig.name}`, { useNewUrlParser: true });

    }
}

export default new Server().app;

