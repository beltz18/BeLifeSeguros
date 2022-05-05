//dependencies
const express = require("express")
const app     = express()
const ejs     = require("ejs")
const parser  = require("body-parser")
const path    = require("path")
//declarations
const port    = 4000

//middlewares
app.use(parser.urlencoded({extended:true}))
app.set("views", path.join(__dirname, "/views"))
app.engine("ejs", ejs.__express)
app.set("view engine", "ejs")
app.use(express.static('views'))

app.listen(port, () =>  {
  console.log(`Server running on http://localhost:${port}`)
})

app.get('/', (req,res) => {
  res.render("index")
})