// controllers/cats.js
const express = require('express');
const router = express.Router();
const Cat = require('../models/cat.js');
const User = require('../models/user.js');

router.get('/', async (req, res) => {
    const cats = await Cat.find({owner: req.user._id});
    res.render('cats/index.ejs', { cats })
});

router.get('/new', (req, res) => {
    console.log(req.params.userId);
    res.render('cats/new.ejs');
});

router.get('/edit', (req, res) => {
    const cat = req.user.cats.id(req.params.id);
    res.render('cats/edit.ejs', { cat } );
  });

router.post('/', async (req, res) => {
    const user = await User.findById(req.user);
    req.body.owner = req.user._id;
    const cat = await Cat.create(req.body);
    
    res.redirect(`/cats`)
});



module.exports = router;