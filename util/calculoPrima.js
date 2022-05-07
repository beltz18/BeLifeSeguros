let values = require("./valoresPrima")

module.exports = function () {
  this.suma = () => {
    const suma = values.recargoSeguroGenero.mujer + values.recargoSeguroEdad[0]
    return suma
  }
}