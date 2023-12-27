const express = require("express")

const app = express()

app.use((req, res, next) => {
    console.log("In the middleware!");
    next()
})

app.use(() => {
    console.log("In the another middleware!");
})


app.listen(3000, () => {
    console.log("Server starts at port 3000!");
})