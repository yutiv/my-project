const express = require('express');
const { getUsers, createUser, login } = require('../bll/bll');
const router = express.Router();

router.get('/', getUsers);
router.post('/registration', createUser);
router.post('/login', login);
// router.get('/', auth, ctrlUser.slash);
module.exports = router;