const { Router } = require("express");

const { check, login, registration } = require("../controllers/user-controller");

const router = new Router();

router.post("/registation", registration);

router.post("/login", login);

router.get("/auth", check);

module.exports = router;