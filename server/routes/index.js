const { Router } = require("express");

const brandRouter = require("./brand-router");
const deviceRouter = require("./device-router");
const typeRouter = require("./type-router");
const userRouter = require("./user-router");

const router = new Router();

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);

module.exports = router;