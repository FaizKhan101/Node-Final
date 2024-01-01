const path = require("path")

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs"),
app.set("views", "views")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"))

app.use("/admin", adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 Error" })
})

app.listen(3000, () => {
  console.log("Server starts at port 3000!");
});
