//Ejercicio #1 : 1 - 4 - Video 34 -- Solucion Video #35

//Ejercicio #1:Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function contarCaracteres(str = "") {
  if (!str) {
    console.warn("No ingreso ningún valor...!");
  } else {
    let caracteres = str.toLowerCase();

    console.info(
      `La cadena de texto "${caracteres}" tiene ${caracteres.length} caracteres`
    );
  }
}

//Solucion Johon Mircha
const contCaracteres = (cadena = "") =>
  !cadena
    ? console.warn("No ingreso ningun texto")
    : console.info(
        `la cadena de text "${cadena}" tiene ${cadena.length} caracteres Jon Mircha`
      );

//Ejercicio #2: Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function extraerCadena(str = "", nro = 0) {
  if (!str || !nro) {
    console.warn(
      `No ingreso unos de los dos valores: "Cadena de texto"  o  "el nro de caracteres a extraer de la cadena"...!`
    );
  } else {
    let caracteres = str.toLowerCase();
    let numero = nro;

    /*El método.slice() es idéntico a.substring(), es decir, extrae una cadena desde el indicecomo separador*/
    cadenaExtraida = caracteres.slice(0, numero);
    console.info(
      `De la cadena de texto "${caracteres}" se extrajo la palabra "${cadenaExtraida}"`
    );
  }
}

//Solucion Johon Mircha
const extCadena = (cadena = "", loguitud = undefined) =>
  !cadena
    ? console.warn("No ingreso ningun texto")
    : loguitud === undefined
    ? console.warn("No ingreso la longuitud a recorrer")
    : console.info(
        `De la cadena de texto "${cadena}" se extrajo la palabra "${cadena.slice(
          0,
          loguitud
        )}"`
      );

//Ejercicio #3: Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

//Extar Cadena
function extraerCadenaArray(str, separador = undefined) {
  if (!str) {
    console.warn("No ingreso ningún valor...!");
  } else {
    let caracteres = str.toLowerCase();

    //El método .split() convierte un string en un array usando un string como separador
    cadenaExtraida = caracteres.split(separador);
    console.info(
      `De la cadena de texto '${caracteres}' se extrajo el siguiente array[${cadenaExtraida}]`
    );
  }
}

//Solucion Johon Mircha
const extCadenaArray = (cadena, separdor = undefined) =>
  !cadena
    ? console.warn("no ingreso la cadena")
    : separdor === undefined
    ? console.warn("No ingreso el caracter separador, por defecto blanco")
    : console.info(
        `De la cadena de texto '${cadena}' se extrajo el siguiente array[${cadena.split(
          separdor
        )}]`
      );

//Ejercicio 4: Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirCadena(str = "", repetirCadena) {
  if (str) {
    if (repetirCadena) {
      let cadena = str + ", ";
      let caracteres = cadena.repeat(repetirCadena);
      caracteres = caracteres.split();
      console.info(
        `El texto '${str}': repeticion del texto '${caracteres}', se repite ${repetirCadena} veces`
      );
    } else {
      console.log("No ingresastes la cantidad de repeticiones del texto");
    }
  } else {
    console.log("No se ingreso ninguna cadena de texto");
  }
}

//Solucion Johon Mircha
const repetirTexto = (str = "", repetirCadena = undefined) => {
  if (!str) return console.warn("No ingreso un texto");

  if (repetirCadena === undefined)
    return console.warn("No ingreso el numero de veces a repetir");

  if (repetirCadena === 0)
    return console.warn("El numero de veces debe ser mayor a cero");

  if (Math.sign(repetirCadena) === -1)
    return console.warn("El numero de veces no puede ser negativo");

  cadena = str + ", ";
  console.info(cadena.repeat(repetirCadena));

  for (let i = 1; i <= repetirCadena; i++) console.info(`${str},${i}`);
};

//Selecciono el ejercicio a analizar
let operacion = prompt(
  "Ingrese la operación a realizar \n 1. Contar el número de caracteres de una cadena de texto.  \n 2. Devolver el texto recortado según el número de caracteres indicados. \n 3. Devolver un Array de textos separados por cierto caracter. \n 4. Se repitira el texto X veces"
);

//Valido que se seleccione una operación
if (operacion != null) {
  if (operacion == 1) {
    //Paso el texto a utilizar
    let cadenaIngresada = prompt("Ingrese un texto");

    //Invoco funcion contarCaracteres
    contarCaracteres(cadenaIngresada);
    contCaracteres(cadenaIngresada);
  } else {
    if (operacion == 2) {
      //Paso el texto a utilizar
      let cadenaIngresada = prompt("Ingrese un texto");

      //Paso el texto a utilizar
      let extraerDecadena = prompt("Indique el número de caracteres a extrar");
      extraerCadena(cadenaIngresada, extraerDecadena);
      extCadena(cadenaIngresada, extraerDecadena);
    } else {
      if (operacion == 3) {
        //Paso el texto a utilizar
        let cadenaIngresada = prompt("Ingrese un texto");
        let separadorIngresado = prompt("Ingrese separador de la cadena");

        //Paso el texto a utilizar
        extraerCadenaArray(cadenaIngresada, separadorIngresado);
        extCadenaArray(cadenaIngresada, separadorIngresado);
      } else {
        if (operacion == 4) {
          //Paso el texto a utilizar
          let cadenaIngresada = prompt("Ingrese un texto");

          //Paso el texto a utilizar
          let repetireCadena = prompt(
            "Indique el número de repeticiones del texto"
          );
          //repetirCadena(cadenaIngresada, repetireCadena);
          repetirTexto(cadenaIngresada, repetireCadena);
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
