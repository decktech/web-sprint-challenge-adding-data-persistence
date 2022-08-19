const express = require('express')
const Recipe = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
      .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch(next); 
  });
  
  module.exports = router
