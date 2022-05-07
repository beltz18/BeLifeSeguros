module.exports = function () {
  this.connection = () => {
    let mysql = require('mysql')
    let conn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "seguros_belife",
      port: 4000
    })
    return conn
  }
}