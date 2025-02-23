import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, storeData } from '../storage';

const EditRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // Fetch the recipe data from storage or API
    const storedUsers = getData('users');
    if (storedUsers) {
      const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
      if (loggedInUser) {
        const recipe = loggedInUser.recipes.find((recipe) => recipe.id === parseInt(params.id));
        if (recipe) {
          setRecipeName(recipe.name);
          setIngredients(recipe.ingredients.join(','));
          setInstructions(recipe.instructions.join('.'));
        }
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the recipe data
    const storedUsers = getData('users');
    if (storedUsers) {
      const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
      if (loggedInUser) {
        const recipeIndex = loggedInUser.recipes.findIndex((recipe) => recipe.id === parseInt(params.id));
        if (recipeIndex !== -1) {
          loggedInUser.recipes[recipeIndex] = {
            id: parseInt(params.id),
            name: recipeName,
            ingredients: ingredients.split(','),
            instructions: instructions.split('.'),
          };
          storeData('users', storedUsers);
        }
      }
    }
    // Navigate back to the profile page
    navigate('/profile');
  };

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>Recipe Name:</label>
        <input type="text" value={recipeName} onChange={(event) => setRecipeName(event.target.value)} />
        <br />
        <label>Ingredients:</label>
        <input type="text" value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
        <br />
        <label>Instructions:</label>
        <textarea value={instructions} onChange={(event) => setInstructions(event.target.value)} />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipe;