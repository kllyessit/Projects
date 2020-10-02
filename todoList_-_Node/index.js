'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Get request to update Browser with data that is saved in json file
app.get('/task', function(req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) {
            return res.json("Error Message: " + err);
        } else {
            res.send(data);
        }
    });
});

// Post request to update the json file when user adds new tasks
app.post('/task/:id', function(req, res) {
    // Opening file
    const data = require('./data.json');

    // Retrieving data from req
    const taskId = req.params.id;
    const task = req.body.task;
    const status = req.body.status;

    // Creating json object
    const list = {
        [taskId] : {
            "task": task,
            "status": status

    }};

    // Specify nested array and pushing new data
    data.push(list);
    // Stringify json
    const json = JSON.stringify(data);
    // Writing file again with previous data and new data
    fs.writeFile('data.json', json, function (err) {
        if (err) {
            return res.json("Error Message: " + err);
        } else {
            console.log('Saved!')
        }
        });
    res.end();
});
app.post('/task/:id/remove', function(req, res) {
    const list = require('./data.json');
    const index = req.params;
    console.log(index);
    // Splice from the index from the id param resieved
    list.splice(index, 1);
    const json = JSON.stringify(list);
    fs.writeFile('data.json', json, function (err) {
        if (err) {
            return res.json("Error Message: " + err);
        } else {
            console.log('Removed!')
        }
    });
    res.end()
});
app.listen(port, function() {
    console.log(`Listening to ${port}...`);
});
