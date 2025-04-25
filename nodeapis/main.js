const express = require('express')
const router = express.Router();

const control = require('./routes');

router.get('/getuser' , control.getUser);
router.post('/postuser' , control.postUser);
router.post('/putuser/:id', control.putUser);
router.delete('/deleteuser/:id' , control.deleteUser);

module.exports = router;