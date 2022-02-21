// /projects
const express = require('express');
const router = express.Router();
const { getProjects, getProjectBySlug, setProject, updateProject } = require('../controllers/projectsController');

router
    .get('/', getProjects)
    .post('/', setProject)
    .get('/:slug', getProjectBySlug)
    .put('/:slug', updateProject);


module.exports = router;