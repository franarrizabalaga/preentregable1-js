// Función para verificar si un número es par o impar
function verificarParImpar() {
    var numero = parseInt(document.getElementById("numero").value);
  
    if (!isNaN(numero)) {
      if (numero % 2 === 0) {
        alert("El número " + numero + " es PAR.");
        console.log("El número " + numero + " es PAR.");
      } else {
        alert("El número " + numero + " es IMPAR.");
        console.log("El número " + numero + " es IMPAR.");
      }
    } else {
      alert("Por favor, ingresa un número válido.");
      console.log("El valor ingresado no es un número válido.");
    }
  }
  