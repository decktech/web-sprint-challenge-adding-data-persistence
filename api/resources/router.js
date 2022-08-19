const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.getResources()
      .then(resources => {
        res.status(200).json(resources);
      })
      .catch(next); 
  });

//   router.post('/', (req, res, next) => { // it would be nice to have animal validation midd
//     Resource.createResource(req.body)
//       .then(project => {
//         res.status(201).json(project);
//       })
//       .catch(next);
//   });
  
  module.exports = router

