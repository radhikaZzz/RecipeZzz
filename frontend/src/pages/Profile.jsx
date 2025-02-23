import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../storage';

const Profile = () => {
  const [username, setUsername] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedUsers = getData('users');
    if (storedUsers) {
      const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
      if (loggedInUser) {
        setUsername(loggedInUser.username);
      }
    }

    const storedRecipes = getData('recipes');
    if (storedRecipes) {
      const userRecipes = storedRecipes.filter((recipe) => recipe.author === username);
      setRecipes(userRecipes);
    }
  }, []);

  return (
    <div className="container mt-5">
      <h1>Profile</h1>
      <p>Welcome, {username}!</p>
      <h2>Your Recipes:</h2>
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

export default Profile;