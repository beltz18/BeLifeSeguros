module.exports = function () {
  this.new_user = (fullname,dni,phone,gender,age,address,region,civil_state) => {
    const sql = `INSERT INTO cliente
                        (nom_usr,dni_usr,tlf_usr,gnd_usr,dir_usr,reg_usr,age_usr,esc_usr)
                      VALUES
                        ('${fullname}', '${dni}', '${phone}', '${gender}', '${address}', '${region}', '${age}', '${civil_state}');`
    return sql
  }
  this.get_all_user = () => {
    const sql = `SELECT * FROM cliente`
    return sql
  }
  this.get_user = (a) => {
    const sql = `SELECT * FROM cliente WHERE gnd_usr LIKE '${a}' OR nom_usr LIKE '${a}' OR reg_usr LIKE '${a}' OR dni_usr LIKE '${a}';`
    return sql
  }
}