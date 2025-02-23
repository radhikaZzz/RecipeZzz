import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
//import { Link } from 'react-router-dom';
import { getData } from '../storage';
import sampleRecipes from '../sample-recipes';
import '../styles/Home.css';
const Home = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const storedRecipes = getData('recipes');
    if (storedRecipes) {
      setRecipes(storedRecipes); // Before it was display only 3 example recipes
    }
  }, []);

  return (
    
      
      <div className="container mt-5">

      <h1>Welcome to the Recipe Sharing Platform!</h1>
      <p>Explore and share your favorite recipes with the community.</p>
      {/* <h2>Example Recipes:</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul> */}
      {/* <p>
        <Link to="/recipes">Browse all recipes</Link>
      </p> */}
      <form className="search-form">
  <input type="search" placeholder="Search recipes" />
  <button type="submit">Search</button>
</form>

      <div className="recipe-card-container">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
        </div>
  
  );
};

export default Home;

// import React from 'react';
// import NavigationBar from '../components/NavigationBar';

// const Home = () => {
//   return (
//     <div>
//       <NavigationBar />
//       <div className="container mt-5">
//         <h1>Welcome to Recipe Sharing Platform!</h1>
//         <p>Browse and discover new recipes!</p>
//       </div>
//     </div>
//   );
// };

// export default Home;