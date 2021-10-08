const express = require('express');
const { getAllUsers, getUserById, signUpUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.get('/', getAllUsers);

router.get('/user/:id', getUserById)

router.post('/signup', signUpUser)

router.post('/login', loginUser)

module.exports = router; 