//Ejercicio #4: 12 - 14 Video 36 - Solucion Video #37

//Ejercicio #12: Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

  const nroPrimo = (num = undefined) =>{ 
 //Valido que numero no sea cer
  if (num === undefined) return console.warn("No ingreso numero");

  //Validad que sea numero
  if (typeof num !== "number")
  return console.error(`El valor '${num}', ingresado no es numero`);

  //Validad que sea mayor que cero
  if (num === 0) return console.error(`Numero ingresado no puede ser cero..`);

  //Validad que sea mayor que cero
  if (Math.sign(num)=== -1) return console.error("Numero ingresado no puede ser negativo..");

    //Validad que sea mayor que cero
  if (num === 1) return console.error("Numero ingresado no puede ser 1");

  let disible = false;
	for (let x = 2; x < num; x++) {
    if ((num % x) === 0){

    disible = true;

    break;
    }
	}
	// Si se Divide por el mismo y por 1 retorna true, porque es primo
  return (disible)
  ?console.log(`El numero ${num}, No es primo`)
  :console.log(`El numero ${num}, es primo`);
}


//Ejercicio #13: Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const nroParImpar = (num = undefined) =>{ 
 //Valido que numero no sea cer
  if (num === undefined) return console.warn("No ingreso numero");

  //Validad que sea numero
  if (typeof num !== "number")
  return console.error(`El valor '${num}', ingresado no es numero`);

return ((num % 2) === 0)
  ?console.log(`El numero '${num}' ingresado, es par.`)
  :console.log(`El numero '${num}' ingresado, es impar.`)

}

//Ejercicio #14: Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const celsiusVsFahrenheit = (grados = undefined, unidad=undefined) => {
  //Valido que numero no sea cer0
  if (grados === undefined) return console.warn("No ingreso numero");

  //Validad que sea numero
  if (typeof grados !== "number")
  return console.error(`El valor '${grados}', ingresado no es numero`);

    //Valido grados a Convertir
  if (unidad === undefined) return console.warn("No ingreso el tipo de grado a convertir");

      //Valido que la unidad no sea char
  if (typeof unidad !=="string") return console.error(`El valor '${unidad}', ingresado no es un char`);

       //Valido que la unidad no sea char
  if (unidad.length !==1 || !/(C|F)/.test(unidad)) return console.error(`El valor de la unidad '${unidad}', no es reconocido`);

  if (unidad === "C"){
  return console.info(`${grados}°C = ${Math.round((grados*(9/5))+32)}°F`);
  }else  if (unidad === "F"){
  return console.info(`${grados}°F = ${Math.round(((grados-32)*(5/9)))}°C`);
}
}

//Selecciono el ejercicio a analizar
let operacion = prompt(
  "Ingrese la operación a realizar \n 1. Determine si un número es primo.  \n 2. Determine si un número es par o impar \n 3. Convertir grados Celsius a Fahrenheit."
);

//Valido que se seleccione una operación
if (operacion != null) {
  if (operacion == 1) {
    //Paso el texto a utilizar
    //Invoco funcion Numero Primo
  nroPrimo();
  nroPrimo(0);
  nroPrimo(1);
  nroPrimo(-1);
  nroPrimo(7);
  nroPrimo(4);
  }else {
    if (operacion == 2) {
    //Invoco funcion invertirCadena
    const numerosParaProbar = [29,1, 2,3,4,50, 7,51, 0, -29,true,' '];

numerosParaProbar.forEach(num => {
	nroParImpar(num);
});
    } else {
      if (operacion == 3) {
  celsiusVsFahrenheit();
  celsiusVsFahrenheit("2");
  celsiusVsFahrenheit(2);
  celsiusVsFahrenheit(2,true);
  celsiusVsFahrenheit(32,"F");
  celsiusVsFahrenheit(0,"C");
  celsiusVsFahrenheit(25,"C");
      }
    }
  }
} else {
  console.info("no selecciono una opcion");
}

console.info(operacion);
