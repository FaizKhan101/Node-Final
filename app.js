const express = require("express")

const app = express()

app.use('/add-product', (req, res, next) => {
    console.log("In the middleware!");
    res.send("Add Product Page")
})

app.use("/", (req, res, next) => {
    console.log("Hello from Express");
    res.send("Hello from express!")
})

app.listen(3000, () => {
    console.log("Server starts at port 3000!");
})