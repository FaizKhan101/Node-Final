const express = require("express");

const adminData = require("./admin")

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("shop.js", adminData.products);
  res.render("shop", { pageTitle: "Shop", products: adminData.products })
});

module.exports = router;
