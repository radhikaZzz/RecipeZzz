import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/RecipeList';
import RecipeDetail from './pages/RecipeDetail';
import Login from './pages/Login';
import Register from './pages/Register';
// import Profile from './pages/Profile';
import CreateRecipe from './pages/CreateRecipe';
import EditRecipe from './pages/EditRecipe';
import NavigationBar from './components/NavigationBar';
import ProfilePage from './pages/ProfilePage';
//import PrivateRoute from './PrivateRoute';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/edit-recipe/:id" element={<EditRecipe />} />
      </Routes>
    </BrowserRouter>
              
  );
};

export default App;