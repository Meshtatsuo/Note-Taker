const router = require("express").Router();
const apiRoutes = require("../apiRoutes/api");
// Route api based calls to api.js
router.use(require("./api"));
router.use(apiRoutes);

module.exports = router;
