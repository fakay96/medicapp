const express = require('express');
const api = express.Router();
const flips = require('../controllers/flip_card');

// ========================================================
// USE CONTROLLERS(POST)
// ========================================================

// Post Card
api.post('/postCard', flips.postCard);

// ========================================================
// USE CONTROLLERS(GET)
// ========================================================

// Get a card
api.get('/getCard/:cardID', flips.getCard);

module.exports = api;