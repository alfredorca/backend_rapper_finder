const express = require('express');
const { getAllRappers, getRapperbyId, createRapper, putRapper, deleteRapper } = require('../controllers/rapperController');

const router = express.Router();

router.get('/', getAllRappers)

router.get('/rapper/:id', getRapperbyId);

router.post('/rapper', createRapper)

router.put('/rapper/:id', putRapper);

router.delete('/rapper/:id', deleteRapper);

module.exports = router;