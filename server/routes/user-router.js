const { Router } = require("express");

const router = new Router();

router.post(
  "/registation",

);

router.post(
  "/login",

);

router.get(
  "/auth",
  (request, response) => {
    response.status(200)
      .json(
        {
          message: "Working!!!"
        }
      );
  }
);

module.exports = router;