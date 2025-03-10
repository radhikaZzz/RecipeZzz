import React from 'react';
import recipes from '../recipes';
import { useParams } from 'react-router-dom';


const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  return (
      
      <div className="container mt-5">
        <h1>{recipe.title}</h1>
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions:</h2>
        <ol>
          {recipe.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ol>
      </div>
  
  );
};

export default RecipeDetail;