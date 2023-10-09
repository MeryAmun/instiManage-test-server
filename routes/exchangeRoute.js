const express = require('express');
const router = express.Router();
const { getAllExchanges,createNewExchange } = require('../controllers/exchangeControllers')

router.get('/exchanges/all',getAllExchanges)



router.post('/exchange/create', createNewExchange)


module.exports = router