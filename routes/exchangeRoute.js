const express = require("express");
const router = express.Router();
const {
  getAllExchanges,
  createNewExchange,
  updateExchange,
  deleteExchange,
} = require("../controllers/exchangeControllers");

router.get("/exchanges/all", getAllExchanges);

router.post("/exchange/create", createNewExchange);
router.put("/exchange/:id", updateExchange);
router.delete("/exchange/:id", deleteExchange);

module.exports = router;
