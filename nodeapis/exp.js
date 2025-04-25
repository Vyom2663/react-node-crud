const express = require('express');
const connectdb = require('./connectDB');
const app = express();
const router = require('./main');
const port = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

connectdb();

app.use('/api' , router);

app.get('/', (req,res) =>{
    res.send("hello");
})

app.listen(port , (req,res) => {
    console.log(`server is running on port ${port}`)
})