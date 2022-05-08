//Imports
require("./util/conection")()
require("./util/calculoPrima")()
require("./util/query")()
var conexion = connection()

//Dependencies
const express = require("express")
const app     = express()
const ejs     = require("ejs")
const parser  = require("body-parser")
const path    = require("path")

//Declarations
const port    = 4001

//middlewares
app.use(parser.urlencoded({extended:true}))
app.set("views", path.join(__dirname, "/views"))
app.engine("ejs", ejs.__express)
app.set("view engine", "ejs")
app.use(express.static('views'))

//Server
app.listen(port, () => {
  conexion.connect(function (err) {
    if (err) throw err
    console.log(`Server running on http://localhost:${port}`)
  })
})

//Index
app.get('/', (req,res) => {
  res.render("index")
})

//User routes
app.get('/user', (req,res) => {
  const sql = get_all_user()
  let users = []
  conexion.query(sql, function (err,data,fields) {
    if (err) throw err
    users = data
    res.render("clientes", {users})
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

app.get("/user/crud/delete/:id", (req,res) => {
  const { id } = req.params
  const sql = delete_user(id)
  conexion.query(sql, (err,data,fields) => {
    if (err) throw err
    res.redirect("/user")
  })
})

app.get("/user/crud/update/:id", (req,res) => {

})

//Contract routes
app.get('/seguro', (req,res) => {
  const sql    = get_all_contracts()
  let contract = []
  conexion.query(sql, function (err,data,fields) {
    if (err) throw err
    contract = data
    res.render("seguros", {contract})
  })
})

app.post("/seguro/crud/add", (req,res) => {
  const { tipo,dni,prm_anu } = req.body
  const yea_cnt = 2022
  const sql = new_contract(tipo,dni,prm_anu,yea_cnt)
  conexion.query(sql, (err,data,fields) => {
    if (err) throw err
    console.log({sql,data})
    res.redirect("/seguro")
  })
})

app.get("/seguro/crud/delete/:id", (req,res) => {
  const { id } = req.params
  const sql = delete_contract(id)
  conexion.query(sql, (err,data,fields) => {
    if (err) throw err
    res.redirect("/seguro")
  })
})

app.get("/seguro/crud/update/:id", (req,res) => {

})