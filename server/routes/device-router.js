const { Router } = require("express");

const { create, getAll, getOneById } = require("../controllers/device-controller");
const checkRole = require("../middlewares/role-middleware");

const router = new Router();
const adminMiddleware = checkRole("ADMIN");

router.post("/", adminMiddleware, create);

router.get("/", getAll);

router.get("/:id", getOneById);

module.exports = router;