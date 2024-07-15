const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('./models/user');
const router = express.Router();

router.get('/users', (req, res) => res.json(getAllUsers()));
router.get('/users/:id', (req, res) => res.json(getUserById(parseInt(req.params.id))));
router.post('/users', (req, res) => res.json(createUser(req.body)));
router.put('/users/:id', (req, res) => res.json(updateUser(parseInt(req.params.id), req.body)));
router.delete('/users/:id', (req, res) => res.json(deleteUser(parseInt(req.params.id))));

module.exports = router;
