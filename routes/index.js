var express = require('express');
var router = express.Router();

let projects = [];

/* Get get projects. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    projects: projects
  });
});

/* POST add project. */
router.post('/', function(req, res, next) {
  const {project} = req.body;

  if (!project) {
    res.status(400).json({
      Status: 400,
      Message: 'Project is not added'
    });
  } else {
    projects.push(project);
    res.status(200).json({
      Status: 200,
      Message: 'Project successfully added'
    });
  }
});

/* PATCH update project. */
router.patch('/:projectId', function(req, res, next) {
  const {projectId} = req.params;
  const {project} = req.body;

  if (!project || !projectId) {
    res.status(400).json({
      Status: 400,
      Message: 'Project is not updated'
    });
  } else if (projectId < 0 || projectId > projects.length) {
    res.status(400).json({
      Status: 400,
      Message: 'Project does not exist'
    });
  }else {
    projects = projects.map( (p, index) => {
      if (index === projectId) {
        return project;
      }
      return p;
    });
    res.status(200).json({
      Status: 200,
      Message: 'Project successfully updated',
      Project: project
    });
  }
});

/* DELETE delete project. */
router.delete('/:projectId', function(req, res, next) {
  const {projectId} = req.params;

  if (!projectId) {
    res.status(400).json({
      Status: 400,
      Message: 'ProjectId is not presented'
    });
  } else if (projectId < 0 || projectId > projects.length) {
    res.status(400).json({
      Status: 400,
      Message: 'Project does not exist'
    });
  } else {
    projects = projects.filter( (p, index) => index !== projectId);
    res.status(200).json({
      Status: 200,
      Message: 'Project successfully deleted',
    });
  }

});

module.exports = router;
