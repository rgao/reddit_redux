const router = require("express").Router();
const todoController = require("../../controllers/todoController.js");

router.route("/")
    .get(todoController.list)
    .post(todoController.create);

router.route("/todoId")
    .get(todoController.retrieve)
    .put(todoController.update)
    .delete(todoController.destroy);

module.exports = router;