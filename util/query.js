module.exports = function () {
  this.new_user = (fullname,dni,phone,gender,age,address,region,civil_state) => {
    const sql = `INSERT INTO cliente
                        (nom_usr,dni_usr,tlf_usr,gnd_usr,dir_usr,reg_usr,age_usr,esc_usr)
                      VALUES
                        ('${fullname}', '${dni}', '${phone}', '${gender}', '${address}', '${region}', '${age}', '${civil_state}');`
    return sql
  }
}