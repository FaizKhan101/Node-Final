const express = require("express");

const router = express.Router();

const products = []

router.get("/add-product", (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" })
});

router.post("/add-product", (req, res, next) => {
  products.push(req.body)
  res.redirect("/");
});

exports.router = router;
exports.products = products

