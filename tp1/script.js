function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operador').value;
  let result;

  switch (operator) {
    case 'suma':
      result = num1 + num2;
      break;
    case 'resta':
      result = num1 - num2;
      break;
    case 'multiplicacion':
      result = num1 * num2;
      break;
    case 'division':
      if (num2 === 0) {
        document.getElementById('resultado').innerText = "Error: No es posible dividir por cero.";
        return;
      }
      result = num1 / num2;
      break;
    default:
      document.getElementById('resultado').innerText = "Operación no válida";
      return;
  }

  // Verificar si el resultado está fuera del rango permitido
  const maxResultValue = 1e10; // Definir el valor máximo permitido
  const minResultValue = -1e10; // Definir el valor mínimo permitido

  if (result > maxResultValue || result < minResultValue) {
    document.getElementById('resultado').innerText = "Error: El resultado es demasiado grande o pequeño para ser mostrado.";
    return;
  }

  document.getElementById('resultado').innerText = `El resultado es: ${result}`;
}

function borrar() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('resultado').innerText = 'El resultado es:';
}