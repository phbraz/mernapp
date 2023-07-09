const mongoose = require('mongoose');

const userListSchema = new mongoose.Schema({
    UserName: { type: String, required: true },
    PlaceCount: Number
});

module.exports = mongoose.model('UserList', userListSchema);