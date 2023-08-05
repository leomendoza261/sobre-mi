function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value); /* le asignamos a la variable num1 el valor del input segun su id*/
  const num2 = parseFloat(document.getElementById('num2').value); /* le asignamos a la variable num2 el valor del input segun su id*/
  const operator = document.getElementById('operador').value;
  let resultado;

  switch (operator) {
    case 'suma':
      resultado = num1 + num2;
      break;
    case 'resta':
      resultado = num1 - num2;
      break;
    case 'multiplicacion':
      resultado = num1 * num2;
      break;
    case 'division':
      if (num2 === 0) {  /* en este 'if' verificamos si el segundo numerando es '0' para poder informar que las divisiones por 0 no esta permitidas */
        document.getElementById('resultado').innerText = "Error: No es posible dividir por cero.";
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      document.getElementById('resultado').innerText = "Operación no válida";
      return;
  }

  // Verificar si el resultado está fuera del rango permitido
  const maximoValor = 1e10; // Definir el valor máximo permitido, le puse un valor no tan alto para poder verificar si funciona
  const minimoValor = -1e10; // Definir el valor mínimo permitido

  if (resultado > maximoValor || resultado < minimoValor) {
    document.getElementById('resultado').innerText = "Error: El resultado es demasiado grande o pequeño para ser mostrado.";
    return;
  }

  document.getElementById('resultado').innerText = `El resultado es: ${resultado}`;
}

/* esta funcion borra el contenido del los inputs y el valor en la etiquieta con el id='resultado' */
function borrar() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('resultado').innerText = 'El resultado es:';
}