const express = require('express');
const router = express.Router();
const { getAllGeometricFigures, createGeometricFigure } = require('../controllers/geometryControllers')

router.get('/geometry/all',getAllGeometricFigures)



router.post('/geometry/create', createGeometricFigure)


module.exports = router