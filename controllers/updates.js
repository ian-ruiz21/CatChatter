const express = require('express');
const router = express.Router();
const Update = require('../models/update');
const Cat = require('../models/cat');


router.get('/', async (req, res) => {
    const updates = await Update.find({ cat: {owner: req.user._id} });
    res.render('updates/index.ejs');
});


module.exports = router;
