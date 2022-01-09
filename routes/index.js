var express = require('express');
var router = express.Router();

const projects = [];

/* POST add project. */
router.post('/', function(req, res, next) {
  const {project} = req.body;

  if (project) {
    projects.push(project);
    res.status(200).json({
      Status: 200,
      Message: 'Project successfully added'
    });
  }
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
  }
});

module.exports = router;
