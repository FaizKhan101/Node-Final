const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll()
  console.log(products);
  res.render("shop", { pageTitle: "Shop", products: products });
};

