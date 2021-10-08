const express = require('express');
const { getAllUsers, getUserById, signUpUser, loginUser } = require('../controllers/authController');
const { validateJwt, revalidateJwt } = require('../middlewares/processJwt');
const router = express.Router();

router.get('/', getAllUsers);

router.get('/user/:id', getUserById)

router.post('/signup', signUpUser)

router.post('/login', loginUser)

router.post('/renew', validateJwt, revalidateJwt)

module.exports = router; 