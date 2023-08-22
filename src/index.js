import express from "express";
const app = express();
import bodyParser from "body-parser";

import {PORT} from './config/config.js';




const server = async () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);
    });
};

server();