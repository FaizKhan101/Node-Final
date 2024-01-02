const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    console.log(products);
    res.render("shop", { pageTitle: "Shop", products: products });
  })
};

