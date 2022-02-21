const getProjects = async (req, res) => {
    res.json({
        message: 'Get Projects'
    })
}

const getProjectById = async (req, res) => {
    const projectId = req.params.projectId;
    res.json({
        message: `Get Project ${projectId}`
    })
};

module.exports = { getProjects, getProjectById };