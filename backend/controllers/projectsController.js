const projectModel = require('../models/projectModel');

//@desc  Get all projects
//@route GET /projects
//@access Public
const getProjects = async (req, res) => {
    const projects = await projectModel.find();
    res.json(projects);
}

//@desc  Get project by slug
//@route GET /projects/:slug
//@access Public
const getProjectBySlug = async (req, res) => {
    const slug = req.params.slug;
    const project = await projectModel.findOne({ slug: slug });
    res.json(project);
};

//@desc  Create a new project
//@route POST /projects
//@access Public
const setProject = async (req, res) => {
    const project = new projectModel(req.body);
    await project.save();
    res.json({
        status: 'Project Saved'
    });
}

//@desc  Update a project
//@route PUT /projects/:slug
//@access Public
const updateProject = async (req, res) => {
    const slug = req.params.slug;
    const project = await projectModel.findOne({ slug: slug });
    project.name = req.body.name;
    project.description = req.body.description;
    project.startDate = req.body.startDate;
    project.text = req.body.text;
    await project.save();
    res.json({
        status: 'Project Updated'
    });
}


module.exports = { getProjects, getProjectBySlug, setProject, updateProject };