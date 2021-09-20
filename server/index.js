require("dotenv").config();
const path = require("path");

const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const db = require("./db");
// const models = require("./models");
const router = require("./routes");
const errorMiddleware = require("./middlewares/error-middleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// Обработка ошибок - обязательно самый последний из возможных middlewares
app.use(errorMiddleware);

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