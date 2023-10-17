const express = require("express");
const transactions = express.Router();
const transactionsData = require("../models/transactions");

transactions.get("/", (req, res) => {
  console.log("accessing transaction data");
  res.json(transactionsData);
});

transactions.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (transactionsData[arrayIndex]) {
    res.json(transactionsData[arrayIndex]);
  } else {
    res.redirect("/transactions/404");
    res.status(404).send("No transaction detected at this index!");
  }
});

transactions.post("/", (req, res) => {
  const newTransaction = req.body;
  transactionsData.push(newTransaction);
  res.status(200).json();
});

transactions.put("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (transactionsData[arrayIndex]) {
    transactionsData[arrayIndex] = req.body;
    res.status(200).json(transactionsData[arrayIndex]);
  } else {
    res.redirect("/transactions/404");
    res.status(404).send("No transaction detected at this index!");
  }
});

transactions.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  if (transactionsData[arrayIndex]) {
    const deletedTransaction = transactionsData.splice(arrayIndex, 1);
    res.status(200).json(deletedTransaction[0]);
  } else {
    res.status(404).json({ error: "Could not find transaction to delete!" });
  }
});

module.exports = transactions;
