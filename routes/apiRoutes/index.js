const router = require("express").Router();
const apiRoutes = require("../apiRoutes/api");

router.use(require("./api"));
router.use(apiRoutes);

module.exports = router;
