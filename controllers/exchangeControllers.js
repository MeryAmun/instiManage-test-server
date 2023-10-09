const Exchanges = require('../models/exchangeModel');


const getAllExchanges = async (req, res) => {

    const exchanges =  await Exchanges.find()
    res.status(200).json(exchanges)
   
}


const createNewExchange = async (req, res) => {
    const allExchanges = req.body;
    const newExchange = new Exchanges({
        ...allExchanges,
    });
await newExchange.save()
res.status(201).json(newExchange);


}
const deleteExchange = async (req, res) => {
    const allExchanges = req.body;
    const newExchange = new Exchanges({
        ...allExchanges,
    });
await newExchange.save()
res.status(201).json(newExchange);


}





module.exports = {
    getAllExchanges,createNewExchange
}