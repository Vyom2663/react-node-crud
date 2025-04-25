const mongoose = require('mongoose')

const { Schema , model} = mongoose

const Usersc = new Schema({
    name:{ 
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password : {
        type:String,
        require:true
    }
})

const User = new model('User', Usersc);

module.exports = User;