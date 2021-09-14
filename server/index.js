require("dotenv").config();
const express = require("express");
const cors = require("cors");

const db = require("./db");
// const models = require("./models");
const router = require("./routes");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  "/api",
  router
);

/* app.get(
  '/',
  (request, response) => {
    response.status(200)
      .json(
        {
          message: "Working!!!"
        }
      );
  }
); */

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