const express = require("express")
const logger = require("morgan")

const pizzasArr = require("./data/pizzas")


const app = express()


// Make the static files inside of the `public/` folder publicly accessible
app.use(express.static("public"))

// Setup the request logger to run on each request
app.use(logger("dev"))

// JSON middleware to parse incoming HTTP requests that contain JSON
app.use(express.json());




/**********/
/* ROUTES */
/**********/

// app.get(path, code)
// app.get(path, (req, res, next) => {})


// GET /
app.get("/", (req, res, next) => {
    console.log("we received a GET request for the HOME page...");
    // res.send("")    
    res.sendFile(__dirname + "/views/home.html")
})

// GET /contact
app.get("/contact", (req, res, next) => {
    console.log("we received a GET request for the CONTACT page...");
    // res.send("")
    res.sendFile(__dirname + "/views/contact.html")
})


// GET /pizzas
app.get("/pizzas", (req, res, next) => {
    res.json(pizzasArr)
})



/****************/
/* START SERVER */
/****************/

app.listen(3000, () => { console.log("Server listening on port 3000....") })
