// controllers/cats.js
const express = require('express');
const router = express.Router();
const Cat = require('../models/cat.js');
const User = require('../models/user.js');

router.get('/', async (req, res) => {
    const user = await User.findById(req.user);
    res.render('cats/index.ejs', { cats: user.cats})
});

router.get('/new', (req, res) => {
    console.log(req.params.userId);
    res.render('cats/new.ejs');
});

router.post('/', async (req, res) => {
    req.body.owner = req.owner._id;
    const cat = await Cat.create(req.body);
    res.redirect(`/foods`)
});

module.exports = router;