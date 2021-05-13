const express = require('express');
//Indentifica as rotas que estão chegando
const router = express.Router();
const TaskController = require('../controller/TaskController');
router.post('/', TaskController.create);

module.exports = router;
