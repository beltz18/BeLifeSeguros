DROP DATABASE IF EXISTS seguros_belife;
CREATE DATABASE IF NOT EXISTS seguros_belife;
USE seguros_belife;

/*
  TABLA cliente

  idt_usr - identificador
  nom_usr - nombre
  dni_usr - documento de identidad
  tlf_usr - teléfono
  gnd_usr - género
  dir_usr - dirección
  reg_usr - región
  age_usr - edad
  esc_usr - estado civil
  fch_reg - fecha de registro
*/

DROP TABLE IF EXISTS cliente;
CREATE TABLE IF NOT EXISTS cliente (
  idt_usr INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nom_usr TEXT NOT NULL,
  dni_usr VARCHAR(20) NOT NULL,
  tlf_usr VARCHAR(15),
  gnd_usr SET("M", "F") NOT NULL,
  dir_usr VARCHAR(99) NOT NULL,
  reg_usr VARCHAR(20) NOT NULL,
  age_usr INT UNSIGNED NOT NULL,
  esc_usr SET("soltero(a)", "casado(a)") NOT NULL,
  fch_reg TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (idt_usr),
  CONSTRAINT UNIQUE(dni_usr),
  CONSTRAINT UNIQUE(tlf_usr)
);

/*
  TABLA contrato

  idt_cnt - identificador
  tip_cnt - tipo de contrato
  dni_usr - documento de identidad
  yea_cnt - año de expedición
  prm_anu - prima anual
  fch_reg - fecha de registro
*/

DROP TABLE IF EXISTS contrato;
CREATE TABLE IF NOT EXISTS contrato (
  idt_cnt INT UNSIGNED NOT NULL AUTO_INCREMENT,
  tip_cnt SET("Vida", "Hogar", "Vehículo") NOT NULL,
  dni_usr VARCHAR(20) NOT NULL,
  yea_cnt YEAR NOT NULL,
  prm_anu INT UNSIGNED NOT NULL,
  fch_reg TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (idt_cnt),
  FOREIGN KEY (dni_usr) REFERENCES cliente (dni_usr)
);