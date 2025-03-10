const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
  try {
    const { name, description, ingredients, instructions, image } = req.body;
    const recipe = new Recipe({
      name,
      description,
      ingredients,
      instructions,
      image,
      author: req.user.userId,
    });
    await recipe.save();
    res.status(201).json({ message: 'Recipe created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating recipe' });
  }
};

exports.editRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    if (recipe.author.toString() !== req.user.userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { name, description, ingredients, instructions, image } = req.body;
    recipe.name = name;
    recipe.description = description;
    recipe.ingredients = ingredients;
    recipe.instructions = instructions;
    recipe.image = image;
    await recipe.save();
    res.status(200).json({ message: 'Recipe updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating recipe' });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    if (recipe.author.toString() !== req.user.userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    await recipe.remove();
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting recipe' });
  }
};