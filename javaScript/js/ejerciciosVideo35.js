//Ejercicio #2: 5 - 8 Video 35 - Solucion Video #36

//Ejercicio #5: Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirCadena = (str = "") => {
  //arrow function
  !str
    ? console.warn("No hay una cadena de texto")
    : console.info(str.split("").reverse().join(""));
};

//Ejercicio #6: Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const ContadorCadena = (str = "", cadenaEvaluar = "") => {
  if (!str) return console.warn("No ingreso una cadena");

  if (!cadenaEvaluar) return console.warn("No ingreso cadena a evaluar");

  let i = 0,
    contador = 0;
  while (i !== -1) {
    i = str.indexOf(cadenaEvaluar, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(
    `La cadena'${cadenaEvaluar}' se repite [${contador}] veces`
  );
};

//Ejercicio #7:Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (str = "") => {
  if (!str) return console.warn("No ingreso una cadena");
  str = str.toLocaleLowerCase();
  let alReves = str.split("").reverse().join("");

  return str === alReves
    ? console.info(
        `Si es polindromo, palabra original'${str}'palabra alreves [${alReves}]`
      )
    : console.info(
        `No es polindromo, palabra original'${str}'palabra alreves [${alReves}]`
      );
};

//Ejercicio #8:Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCadena = (str = "", patron = "") =>
  //arrow function
  !str
    ? console.warn("No Ingreso cadena de texto")
    : !patron
    ? console.warn("No ingreso ningun patron")
    : console.info(str.replace(new RegExp(patron, "ig"), ""));

//Selecciono el ejercicio a analizar
let operacion = prompt(
  "Ingrese la operación a realizar \n 1. Invertir Cadena.  \n 2. Número de veces que se repite Cadena \n 3. Valide si una palabra o frase dada, es un palíndromo \n 4. función que elimine cierto patrón de caracteres de un texto dado"
);

//Valido que se seleccione una operación
if (operacion != null) {
  if (operacion == 1) {
    //Paso el texto a utilizar
    let cadenaIngresada = prompt("Ingrese un texto");

    //Invoco funcion invertirCadena
    invertirCadena(cadenaIngresada);
  } else {
    if (operacion == 2) {
      //Paso el texto a utilizar
      let cadenaIngresada = prompt("Ingrese Cadena");

      //Paso el texto a utilizar
      let cadenaEvaluar = prompt("Ingrese Cadena a Evaluar");
      ContadorCadena(cadenaIngresada, cadenaEvaluar);
    } else {
      if (operacion == 3) {
        //Paso el texto a utilizar
        let cadenaIngresada = prompt("Ingrese cadena");

        //Paso el texto a utilizar
        palindromo(cadenaIngresada);
      } else {
        if (operacion == 4) {
          //Paso el texto a utilizar
          let cadenaIngresada = prompt("Ingrese un texto");

          //Paso el texto a utilizar
          let repetireCadena = prompt(
            "Indique el número de repeticiones del texto"
          );
          //repetirCadena(cadenaIngresada, repetireCadena);
          eliminarCadena(cadenaIngresada, repetireCadena);
        } else {
          console.info("Opcion no valida");
        }
      }
    }
  }
} else {
  console.info("no selecciono una opcion");
}

console.info(operacion);
