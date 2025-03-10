const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/auth');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/profile', authMiddleware.authenticate, UserController.getProfile);

module.exports = router;