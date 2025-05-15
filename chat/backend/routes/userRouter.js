const express = require('express');
const { getUsers, createUser,gethello } = require('../controllers/userController');
const router = express.Router();

// router.get('/', gethello)
router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;