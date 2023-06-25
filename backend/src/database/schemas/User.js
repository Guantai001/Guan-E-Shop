const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique:true
      
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.String,
      
    },
    picture: {
        type: mongoose.Schema.Types.String,
    }

});

module.exports = mongoose.model('user', UserSchema);