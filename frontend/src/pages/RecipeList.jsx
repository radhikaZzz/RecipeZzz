import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../storage';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedRecipes = getData('recipes');
    if (storedRecipes) {
      setRecipes(storedRecipes);
    }

    const storedUsers = getData('users');
    if (storedUsers) {
      const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
      if (loggedInUser) {
        setUsername(loggedInUser.username);
      }
    }
  }, []);

  return (
    <div className="container mt-5">
      <h1>Recipes</h1>
      {username && (
        <Link to="/create-recipe">
          <button>Create Recipe</button>
        </Link>
      )}
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
