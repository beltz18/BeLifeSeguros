module.exports = function () {
  //User querys
  this.new_user = (fullname,dni,phone,gender,age,address,region,civil_state) => {
    const sql = `INSERT INTO cliente
                        (nom_usr,dni_usr,tlf_usr,gnd_usr,dir_usr,reg_usr,age_usr,esc_usr)
                      VALUES
                        ('${fullname}', '${dni}', '${phone}', '${gender}', '${address}', '${region}', '${age}', '${civil_state}');`
    return sql
  }
  this.get_all_user = () => {
    const sql = `SELECT * FROM cliente;`
    return sql
  }
  this.delete_user = (id) => {
    const sql = `DELETE FROM cliente WHERE idt_usr = ${id};`
    return sql
  }
  this.get_user = (a) => {
    const sql = `SELECT * FROM cliente WHERE gnd_usr LIKE '${a}' OR nom_usr LIKE '${a}' OR reg_usr LIKE '${a}' OR dni_usr LIKE '${a}';`
    return sql
  }
  //Contract querys
  this.new_contract = (tip_cnt,dni_usr,prm_anu,yea_cnt) => {
    const sql = `INSERT INTO contrato
                        (tip_cnt,dni_usr,prm_anu,yea_cnt)
                      VALUES
                        ('${tip_cnt}', '${dni_usr}', '${prm_anu}', '${yea_cnt}');`
    return sql
  }
  this.get_all_contracts = () => {
    const sql = `SELECT * FROM contrato INNER JOIN cliente ON contrato.dni_usr = cliente.dni_usr;`
    return sql
  }
  this.delete_contract = (id) => {
    const sql = `DELETE FROM contrato WHERE idt_cnt = ${id};`
    return sql
  }
  this.get_contract = (a) => {
    const sql = `SELECT * FROM contato WHERE tip_cnt LIKE '${a}' OR yea_cnt LIKE '${a}' OR dni_usr LIKE '${a}';`
    return sql
  }
}