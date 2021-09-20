const { Router } = require("express");

const { check, login, registration } = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = new Router();

router.post("/registration", registration);

router.post("/login", login);

router.get("/auth", authMiddleware, check);

module.exports = router;