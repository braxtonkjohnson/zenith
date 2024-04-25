const express = require('express');
const router = express.Router();
const { registerUser, loginUser, onboardUser} = require('../controllers/userController');





router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/onboarding', onboardUser);

module.exports = router;
