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

// import React from 'react';
// import NavigationBar from '../components/NavigationBar';
// import recipes from '../recipes';
// import { Link } from 'react-router-dom';

// const RecipeList = () => {
//   return (
//     <div>
//       <NavigationBar />
//       <div className="container mt-5">
//         <h1>Recipe List</h1>
//         <ul>
//           {recipes.map((recipe) => (
//             <li key={recipe.id}>
//               <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RecipeList;