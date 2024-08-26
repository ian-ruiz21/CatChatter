const express = require('express');
const router = express.Router();
const Update = require('../models/update');
const Cat = require('../models/cat');

router.post('/', async (req, res) => {
        const update = new Update({
            cat: req.body.catId,
            activity: req.body.activity,
            health: req.body.health
        });

        await update.save();
        res.redirect(`/cats/${req.body.catId}`);
        console.error(error);
        res.status(500).send('Server Error');
});

router.get('/edit/:id', async (req, res) => {
        const update = await Update.findById(req.params.id).populate('cat');
        res.render('updates/edit.ejs', { update });
});

router.put('/:id', async (req, res) => {
        const update = await Update.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/cats/${update.cat}`);
});

router.delete('/:id', async (req, res) => {
        await Update.findByIdAndDelete(req.params.id);
        res.redirect(`/cats`);
});

module.exports = router;
