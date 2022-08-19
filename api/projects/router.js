const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getProjects()
      .then(project => {
        res.status(200).json(project);
      })
      .catch(next); 
  });
  
  module.exports = router
