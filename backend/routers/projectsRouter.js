// /projects
const express = require('express');
const router = express.Router();
const { getProjects, getProjectBySlug, setProject, updateProject, deleteProject } = require('../controllers/projectsController');

router
    .get('/', getProjects)
    .post('/', setProject)
    .get('/:slug', getProjectBySlug)
    .put('/:slug', updateProject)
    .delete('/:slug', deleteProject)


module.exports = router;