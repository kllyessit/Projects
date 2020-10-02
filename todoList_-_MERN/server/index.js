'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cluster = "Cluster0";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const schema = require('./model/schema');
let MongoClient = require('mongodb').MongoClient;
const DB_CONNECT = 'mongodb+srv://kemedina:rES0ESJjChvk@cluster0.l95nw.mongodb.net/Cluster0?retryWrites=true&w=majority';

dotenv.config();
//connection to db
mongoose.set("useFindAndModify", false);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
// Get model to update Browser with data that is saved in json file
app.get('/task', function(req, res) {
    schema.find({}, (err, tasks) => {
        let list = [];
        if (err) throw res.json({Error : [err]});
        console.log("Retrieved from db!");
        list.push(tasks);
        console.log(list);
        res.end();
        res.send(list);
    });
});
// Post model to update the db when user adds new tasks
app.post('/task', function(req, res) {
    try {
        const task = new schema(req.body);
        task.save();
        console.log("Saved to db!")
    } catch (err) {
        res.json({Error : [err]})
    }
    res.end();
});
app.post('/task/:id', function(req, res) {
    const id = req.params.id;
    schema.findByIdAndRemove(id, err => {
        if (err) return res.json({Error : [err]});
        console.log("Removed from db!");
    });
});
// Will only connect if connecting to db works
mongoose.connect(DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log(`Connected to cluster ${cluster} `);
    app.listen(port, function() {
        console.log(`Listening on ${port}...`);
    });
});

module.exports = app;
