import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {User} from "./models/User";
import {Message} from "./models/Message";
import cors = require("cors");

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    // setup express app here

    // GET a list of users
    app.get('/users', async function(req, res) {
        try {
            const users = await User.find();
            res.send({ status: 'ok', users: users });
        } catch (error) {
            res.send({ status: 'error', error: error });
        }
    });

    // POST a new user
    app.post('/users', async (req, res) => {
        try {
            const user = await User.save(req.body);
            res.send({ status: 'ok', user: user });
        } catch (error) {
            res.send({ status: 'error', error: error });
        }
    });

    // GET a list of messages
    app.get('/messages', async (req, res) => {
        try {
            const messages = await Message.find();
            res.send({ status: 'ok', messages: messages });
        } catch (error) {
            res.send({ status: 'error', error: error });
        }
    });
  
    // POST a new message
    app.post('/messages', async (req, res) => {
        try {
            const message = await Message.save(req.body);
            // const user = await User.findByPk(req.body.userId);
            // const message = await user.sendMessage(req.body.text);
            res.send({ status: 'ok', message: message });
        } catch (error) {
            res.send({ status: 'error', error: error });
        }
    });

    // start express server
    app.listen(3000);
    console.log("Express server running on http://localhost:3000");

}).catch(error => console.log(error));
