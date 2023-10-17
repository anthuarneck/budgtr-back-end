const express = require("express");
const transactions = require("./controllers/transactionsController");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use("/transactions", transactions);

app.get("/", (req, res) => {
  res.send("Welcome to Budgtr App");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page does not exist!" });
});
