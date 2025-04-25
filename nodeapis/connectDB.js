const mongoose = require('mongoose')
const url = "mongodb://localhost:27017";
const dbname = "exam"; 

const connectDB = async () => {
   
        mongoose.connect(`${url}/${dbname}`)
        .then(() => { console.log('Connected to MongoDB');
})
        .catch((err) => {console.log(err)})
    }

module.exports = connectDB;