import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, storeData } from '../storage';

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const storedUsers = getData('users');
    if (storedUsers) {
      const user = storedUsers.find((user) => user.isLoggedIn);
      if (user) {
        setLoggedInUser(user);
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('loggedInUser:', loggedInUser);
    if (loggedInUser.recipes) {
      loggedInUser.recipes.push({
        id: Date.now(),
        name: recipeName,
        ingredients: ingredients.split(','),
        instructions: instructions.split('.'),
      });
    } else {
      loggedInUser.recipes = [
        {
          id: Date.now(),
          name: recipeName,
          ingredients: ingredients.split(','),
          instructions: instructions.split('.'),
        },
      ];
    }
    const storedUsers = getData('users');
    if (storedUsers) {
      const index = storedUsers.findIndex((user) => user.username === loggedInUser.username);
      if (index !== -1) {
        storedUsers[index] = loggedInUser;
        storeData('users', storedUsers);
      }
    }
    navigate('/profile');
  };

  return (
    <div className="container mt-5">
      <h1>Create Recipe</h1>
      <form onSubmit={handleSubmit} className="create-recipe-form">
        <div className="form-group">
          <label>Recipe Name:</label>
          <input
            type="text"
            value={recipeName}
            onChange={(event) => setRecipeName(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <input
            type="text"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Instructions:</label>
          <textarea
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;