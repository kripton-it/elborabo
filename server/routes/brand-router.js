const { Router } = require("express");

const { create, getAll } = require("../controllers/brand-controller");

const router = new Router();

router.post("/", create);

router.get("/", getAll);

module.exports = router;