const express = require('express');
const {getClient, postClient} = require('../controllers/clientCntrl');

const router = express.Router();



router.post('/client', postClient);
router.get('/client', getClient);

module.exports = router;