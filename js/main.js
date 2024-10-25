"use strict";

/*1. Crear una maquetación mínima con el input, el botón, el espacio para pistas y el espacio para el
contador de intentos. (Hecho)
2. Generar un número aleatorio con la ayuda de Math.random y Math.ceil. Podéis usar este código. Para
ello copiad estas 3 líneas de código en vuestro fichero JS y no las modifiquéis:(Hecho)
3. Mostrar en consola el número aleatorio generado para poder saber qué número se ha generado y
poder hacer pruebas.(Hecho)
4. Al pulsar el botón de Prueba, acceder al contenido del input y mostrarlo en la consola.(hecho)
5. Comparar el número que la jugadora ha escrito en el input con el número aleatorio, y pintar las pistas
correspondientes en la pantalla.
6. Actualizar el contador de intentos cada vez que la jugadora pruebe

/*
Seleccionar los elementos del html (inputs y botón)
 */

const number = document.querySelector(".js-input-number");
const button = document.querySelector(".js-button");
const inputPista = document.querySelector(".js-input-pista");
const inputIntentos = document.querySelector(".js-input-intentos");
const msg = document.querySelector(".message");

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const max = 100;

const randomNumber = getRandomNumber(max);
console.log(randomNumber);

const handleClick = (ev) => {
    ev.preventDefault();
    const randomNumber = getRandomNumber(max);
    console.log(randomNumber);

    const numberUser = parseInt(number.value);
    console.log(numberUser);
    if (randomNumber === numberUser) {
        inputPista.innerHTML = ("Has ganado campeona");

    } else if (numberUser < randomNumber) {
        inputPista.innerHTML = ("Demasiado bajo");

    } else (numberUser > randomNumber); {
        inputPista.innerHTML = ("Demasiado alto");
    }
}


button.addEventListener('click', handleClick);

