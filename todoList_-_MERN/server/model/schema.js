const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    task : String,
    status : String
});

module.exports = mongoose.model('schema', schema);
