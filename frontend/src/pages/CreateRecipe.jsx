import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, storeData } from '../storage';
import axios from '../api/axios';

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');
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

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/recipes', {
        name: recipeName,
        description,
        ingredients,
        instructions,
        image,
      });
      // Handle the response data
    } catch (error) {
      // Handle the error
    }

    // console.log('loggedInUser:', loggedInUser);
    // if (loggedInUser.recipes) {
    //   loggedInUser.recipes.push({
    //     id: Date.now(),
    //     name: recipeName,
    //     ingredients: ingredients.split(','),
    //     instructions: instructions.split('.'),
    //   });
    // } else {
    //   loggedInUser.recipes = [
    //     {
    //       id: Date.now(),
    //       name: recipeName,
    //       ingredients: ingredients.split(','),
    //       instructions: instructions.split('.'),
    //     },
    //   ];
    // }
    // const storedUsers = getData('users');
    // if (storedUsers) {
    //   const index = storedUsers.findIndex((user) => user.username === loggedInUser.username);
    //   if (index !== -1) {
    //     storedUsers[index] = loggedInUser;
    //     storeData('users', storedUsers);
    //   }
    // }
    // navigate('/profile');
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