const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route('/:todoId/items')
    .post(itemController.create);

router.route('/:todoId/items/:todoItemId')
    .put(itemController.update)
    .delete(itemController.destroy);

router.route('/:todoId/items')
    .all((req, res) =>
        res.status(405).send({
            message: 'Method Not Allowed'
        }));

module.exports = router;