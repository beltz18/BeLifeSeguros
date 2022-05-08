require("./util/conection")()
require("./util/calculoPrima")()
require("./util/query")()
var conexion = connection()
//dependencies
const express = require("express")
const app     = express()
const ejs     = require("ejs")
const parser  = require("body-parser")
const path    = require("path")
//declarations
const port    = 4001

//middlewares
app.use(parser.urlencoded({extended:true}))
app.set("views", path.join(__dirname, "/views"))
app.engine("ejs", ejs.__express)
app.set("view engine", "ejs")
app.use(express.static('views'))

app.listen(port, () => {
  conexion.connect(function (err) {
    if (err) throw err
    console.log(`Server running on http://localhost:${port}`)
  })
})

app.get('/', (req,res) => {
  res.render("index")
  console.log(addition)
})

app.get('/user', (req,res) => {
  const sql = get_all_user()
  let users = []
  conexion.query(sql, function (err,data,fields) {
    if (err) throw err
    users = data
    res.render("clientes", {users})
  })
})

app.get('/seguro', (req,res) => {
  const sql    = get_all_contracts()
  let contract = []
  conexion.query(sql, function (err,data,fields) {
    if (err) throw err
    contract = data
    console.log(contract)
    res.render("seguros", {contract})
  })
})

app.post("/user/crud/add", (req,res) => {
  const { fullname,dni,phone,gender,age,address,region,civil_state } = req.body
  const sql = new_user(fullname,dni,phone,gender,age,address,region,civil_state)
  conexion.query(sql, (err,data,fields) => {
    if (err) throw err
    res.redirect("/user")
  })
})

app.post("/user/crud/delete", (req,res) => {})

app.post("/user/crud/update", (req,res) => {})