const { Router } = require("express");

const { create, getAll } = require("../controllers/brand-controller");
const checkRole = require("../middlewares/role-middleware");

const router = new Router();
const adminMiddleware = checkRole("ADMIN");

router.post("/", adminMiddleware, create);

router.get("/", getAll);

module.exports = router;