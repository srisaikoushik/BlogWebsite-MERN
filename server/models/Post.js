var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    author_id:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    content:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post',PostSchema);