const express = require('express');
const router = express.Router();
const todo_controller = require('../controllers/todoControllers');

router.get('/', todo_controller.todo_list);
router.post('/', todo_controller.todo_post);
router.get('/new', todo_controller.todo_new)
router.get('/:id', todo_controller.todo_show);
router.get('/:id/edit', todo_controller.todo_edit);
router.put('/:id', todo_controller.todo_put);
router.delete('/:id', todo_controller.todo_delete);

module.exports = router;

