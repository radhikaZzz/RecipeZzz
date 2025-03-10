const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/RecipeController');
const authMiddleware = require('../middlewares/auth');

router.post('/', authMiddleware.authenticate, RecipeController.createRecipe);
router.patch('/:id', authMiddleware.authenticate, RecipeController.editRecipe);
router.delete('/:id', authMiddleware.authenticate, RecipeController.deleteRecipe);

module.exports = router;
