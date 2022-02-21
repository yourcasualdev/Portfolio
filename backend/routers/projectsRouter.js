// /projects
const express = require('express');
const router = express.Router();
const { getProjects, getProjectById } = require('../controllers/projectsController');

router
    .get('/', getProjects)
    .get('/:projectId', getProjectById)

module.exports = router;