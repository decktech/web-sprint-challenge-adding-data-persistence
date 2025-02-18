const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getProjects()
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(next); 
  });

  router.post('/', (req, res, next) => { // it would be nice to have animal validation midd
    Project.createProject(req.body)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(next);
  });
  
  module.exports = router
