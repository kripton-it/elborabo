const { Router } = require("express");

const { create, getAll, getOneById } = require("../controllers/device-controller");

const router = new Router();

router.post("/", create);

router.get("/", getAll);

router.get("/:id", getOneById);

module.exports = router;