const products = require("./admin").products

exports.getProducts = (req, res, next) => {
  console.log("shop.js", products);
  res.render("shop", { pageTitle: "Shop", products: products });
};

