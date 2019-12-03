const router = require("express").Router();
const todoRoute = require("./todos.js");
const itemRoute = require("./todoitems.js");

router.use("/todos", todoRoute);
router.use("/:todoId/items", itemRoute);

module.exports = router;