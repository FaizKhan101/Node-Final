const Product = require("../models/product");

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      pageTitle: "Shop",
      path: "/",
      products: products,
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      pageTitle: "All Products",
      path: "/products",
      products: products,
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId
  Product.findById(prodId, product => {
    res.render("shop/product-detail", {
      pageTitle: product.title,
      path: "/products",
      product: product
    })
  })
}

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart"
  })
}

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "/orders"
  })
}

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "CheckOut",
    path: "/checkout"
  })
}
