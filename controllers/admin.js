const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    imageUrl: imageUrl,
    price: price,
    description: description,
    userId: req.user
  });
  product
    .save()
    .then((result) => {
      console.log("Product Inserted!");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find()
  // .select("title price -_id")
  // .populate("userId", "name")
    .then((products) => {
      console.log(products);
      res.render("admin/products", {
        pageTitle: "Admin Products",
        path: "/admin/products",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const prodId = req.params.productId;
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  Product.findById(prodId)
    .then((product) => {
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;
  Product.findById(prodId).then((product) => {
    product.title = updatedTitle;
    product.imageUrl = updatedImageUrl;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product
      .save()
      .then((result) => {
        console.log("Product updated!");
        res.redirect("/admin/products");
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndDelete(prodId)
    .then((result) => {
      console.log("Product deleted!");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};
