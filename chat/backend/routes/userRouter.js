const express = require('express');
const { getUsers, createUser, login } = require('../bll/bll');
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', login);

module.exports = router;