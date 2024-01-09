const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs"), app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// app.use((req, res, next) => {
//   User.findById("659c239823e90b70ea4939f1")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect("mongodb://localhost:27017/shop")
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server starts at port 3000!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
