const express = require('express');
const router = express.Router();

const AgendaController = require('../controller/AgendaController');
const AgendaValidation = require('../middlewares/agendaValidation');

router.post('/', AgendaValidation, AgendaController.create );
router.put('/:id', AgendaValidation, AgendaController.update);
router.get('/:id', AgendaController.show);
router.delete('/:id', AgendaController.delete);
router.get('/filter/all', AgendaController.all);
router.get('/filter/month', AgendaController.month);


module.exports = router;