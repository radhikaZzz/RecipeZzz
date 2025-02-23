import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getData } from '../storage';

const ProfilePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // Fetch user data and recipes from storage or API
    const storedUsers = getData('users');
    if (storedUsers) {
      const loggedInUser = storedUsers.find((user) => user.isLoggedIn);
      if (loggedInUser) {
        setUsername(loggedInUser.username);
        setRecipes(loggedInUser.recipes || []); // Set recipes to an empty array if its undefined
      }
    }
  }, []);

  const handleCreateRecipe = () => {
    // Navigate to create recipe page
    navigate('/create-recipe');
  };

  const handleEditRecipe = (recipeId) => {
    // Navigate to edit recipe page
    navigate(`/edit-recipe/${recipeId}`);
  };

  const handleDeleteRecipe = (recipeId) => {
    // Delete recipe from user's recipes
    const updatedRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="container mt-5">
      <h1>Profile Page</h1>
      <h2>Welcome, {username}!</h2>
      <button onClick={handleCreateRecipe} className="btn btn-primary">
        Create Recipe
      </button>
      <ul className="list-group mt-3">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="list-group-item">
            <Link to={`/recipes/${recipe.id}`} className="text-decoration-none text-dark">
              {recipe.name}
            </Link>
            <div className="float-end">
              <button onClick={() => handleEditRecipe(recipe.id)} className="btn btn-sm btn-secondary me-2">
                Edit
              </button>
              <button onClick={() => handleDeleteRecipe(recipe.id)} className="btn btn-sm btn-danger">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;