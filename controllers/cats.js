// controllers/cats.js
const express = require("express");
const router = express.Router();
const Cat = require("../models/cat.js");
const User = require("../models/user.js");

router.get("/", async (req, res) => {
  const cats = await Cat.find({ owner: req.user._id });
  res.render("cats/index.ejs", { cats });
});

router.get("/new", (req, res) => {
  res.render("cats/new.ejs");
});

router.post("/", async (req, res) => {
  const user = await User.findById(req.user);
  req.body.owner = req.user._id;
  const cat = await Cat.create(req.body);

  res.redirect(`/cats`);
});

router.delete("/:id", async (req, res) => {
  await Cat.findByIdAndDelete(req.params.id);
  res.redirect("/cats");
});

router.get("/edit/:id", async (req, res) => {
  const cat = await Cat.findById(req.params.id);
  res.render("cats/edit.ejs", { cat });
});

router.get("/instructions", (req, res) => {
    res.render('cats/instructions.ejs');
})

router.put("/:id", async (req, res) => {
  await Cat.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/cats");
});

module.exports = router;
