// 1 - Valor base
const valorBase = {
  "Vida": 20,
  "Hogar": 40,
  "Vehiculo": 30
}

// 2 - Recargos

//Vehiculos
//18-25: 1.2
//26-45: 2.4
//45+:   3.2
const recargoEdadContr = [
  1.2,
  2.4,
  3.2
]

const recargoGeneroContr = {
  "mujer":  0.4,
  "hombre": 0.8
}

//del año:       1.2
//hasta 5 años:  0.8
//más de 5 años: 0.4
const recargoVehiculoContr = [
  1.2,
  2.4,
  3.2
]

//Hogar
//hasta 05 años:  1.0
//hasta 10 años:  0.8
//hasta 30 años:  0.4
//más de 30 años: 0.2
const recargoHogarContr = [
  1,
  0.8,
  0.4,
  0.2
]

const recargoRegionContr = {
  "metropolitana": 3.2,
  "otros": 2.8
}

//Vida
//18-25: 3.6
//26-45: 2.4
//45+:   6.0
const recargoSeguroEdad = [
  3.6,
  2.4,
  6.0
]

const recargoSeguroGenero = {
  "mujer":  1.2,
  "hombre": 2.4
}

const recargoSeguroEstado = {
  "soltero": 4.8,
  "casado": 2.4,
  "otros": 3.6
}

module.exports = {
  valorBase,
  recargoEdadContr,
  recargoGeneroContr,
  recargoVehiculoContr,
  recargoHogarContr,
  recargoRegionContr,
  recargoSeguroEdad,
  recargoSeguroGenero,
  recargoSeguroEstado
}