const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>')
})

app.post("/product", (req, res, next) => {
    console.log(req.body.title);
    res.send("test")
})

app.get("/", (req, res, next) => {
    console.log("Hello from Express");
    res.send("Hello from express!")
})

app.listen(3000, () => {
    console.log("Server starts at port 3000!");
})