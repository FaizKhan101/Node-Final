const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res, next) => {
  products.push(req.body);
  res.redirect("/");
};

exports.products = products