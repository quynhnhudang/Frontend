// routes.js
const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');
const ContentController = require('./controllers/ContentController');

// User routes
router.post('/register', UserController.register);
router.post('/login', UserController.login);

// Content routes
router.get('/vocabulary', ContentController.getVocabulary);
router.get('/pronunciation', ContentController.getPronunciation);
router.get('/quiz', ContentController.getQuiz);

module.exports = router;
