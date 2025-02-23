import { storeData, getData } from './storage';

const authenticateUser = (username, password) => {
  let users = getData('users');
  if (!users) return false;
  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {
    user.isLoggedIn = true;
    user.recipes = user.recipes || []; // Initialize recipes with an empty array
    storeData('users', users);
    return true;
  }
  return false;
};

const registerUser = (username, password) => {
    let users = getData('users');
    if (!users) users = [];
  
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) return false;
  
    users.push({ username, password, isLoggedIn: true });
    storeData('users', users);
    return true;
  };

export { authenticateUser, registerUser };