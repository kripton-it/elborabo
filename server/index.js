require("dotenv").config();
const express = require("express");
const db = require("./db");

const PORT = process.env.PORT || 5000;

const app = express();

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    app.listen(
      PORT,
      () => console.log(`Server started on port ${PORT}`)
    );
  } catch (e) {
    console.error(e);
  }
};

startServer();