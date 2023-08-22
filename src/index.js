import express from "express";
const router = express.Router();
const app = express();
import bodyParser from "body-parser";

import {PORT} from './config/config.js';
import v1ApiRoutes from './routes/index.js';
import connect from "./config/dbConfig.js";


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', v1ApiRoutes);

const server = async () => {

    app.listen(PORT, () => {
        console.log(`Server started on Port ${PORT}`);
    });
    await connect();
};

server();