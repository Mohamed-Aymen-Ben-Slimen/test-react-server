var express = require('express');
var router = express.Router();

const projects = [];

/* Get projects. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    projects: projects
  });
});

/* POST add project. */
router.post('/', function(req, res, next) {
  const {project} = req.body;

  if (project) {
    projects.push(project);
    res.status(200).json({
      Status: 200,
      Message: 'Project successfully added'
    });
  } else {
    res.status(400).json({
      Status: 400,
      Message: 'Project is not added'
    });
  }
});

module.exports = router;
