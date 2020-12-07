//Ejercicio #3: 9 - 11 Video 36 - Solucion Video #37

//Ejercicio #9: Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = (min = 0, max = 0) =>
  console.info(Math.round(Math.random() * (max - min) + min));
  

//Ejercicio #10: Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicuaNum = (num = 0) => {
  //Valido que numero no sea cer
  if (!num) return console.warn("No ingreso numero");

  if (typeof num !== "number")
    return console.error(`El valor '${num}', ingresado no es numero`);

  num = num.toString();
  let alReves = num.split("").reverse().join("");

  return num === alReves
    ? console.info(
        `Si es capicua, número original'${num}'numero al reves [${alReves}]`
      )
    : console.info(
        `No es capicua, número original'${num}'numero al reves [${alReves}]`
      );
};

//Ejercicio #11: Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num = undefined) =>{ 
  //Valido que numero no sea cer
  if (num === undefined) return console.warn("No ingreso numero");

  //Validad que sea numero
  if (typeof num !== "number")
  return console.error(`El valor '${num}', ingresado no es numero`);

  //Validad que sea mayor que cero
  if (num === 0) return console.warn("Numero ingresado no puede ser cero..");

  //Validad que sea mayor que cero
  if (Math.sign(num)=== -1) return console.warn("Numero ingresado no puede ser negativo..");

  let factorial= 1;
	for (let i=num; i>1; i--) {
		factorial *=i; 
	}
	return console.info(`El factorial de '${num}' es '${factorial}'`);
}

//Selecciono el ejercicio a analizar
let operacion = prompt(
  "Ingrese la operación a realizar \n 1. obtenga un numero aleatorio entre 501 y 600.  \n 2. función que reciba un número y evalúe si es capicúa o no \n 3. función que calcule el factorial de un número."
);

//Valido que se seleccione una operación
if (operacion != null) {
  if (operacion == 1) {
    //Paso el texto a utilizar

    //Invoco funcion invertirCadena
    numeroAleatorio(100, 500);
  } else {
    if (operacion == 2) {
      //Paso el texto a utilizar
      capicuaNum();
      capicuaNum(19);
      capicuaNum(2000);
      capicuaNum(2002);
      capicuaNum(18.99);
      capicuaNum(212.212);
    } else {
      if (operacion == 3) {
        //Paso el texto a utilizar
        factorial();
        factorial("5");
        factorial([1,2,3]);
        factorial(0);
        factorial(-5);
        factorial(5);
      }
    }
  }
} else {
  console.info("no selecciono una opcion");
}

console.info(operacion);
