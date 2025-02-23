import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <Link to={`/recipes/${recipe.id}`}>View Details</Link>
    </div>
  );
};

export default RecipeCard;