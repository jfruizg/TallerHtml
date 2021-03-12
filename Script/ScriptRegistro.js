const localidad = document.getElementById(".localidad");
const peligrosos = document.getElementById(".peligrosos");
const sexo = document.getElementById(".sexo");
const tamaño = document.getElementById(".tamaño");
const especie = document.getElementById(".especie");
const form = dosumen.getElementById(".form")


// declarar primero variables

var contenedor_register = document.querySelector(".contenedor_registrar");
var formulario_login = document.querySelector(".formularioRegistrar");

form.addEventListener("submit", e => {
    e.preventDefault();
    let warning = '';
    if (localidad.nodeValue.length < 0) {
        warnings += 'el nombre no es valido <br>';
    }
    if (peligrosos.nodeValue.length < 0) {
        warnings += 'el nombre no es valido <br>';
    }
    if (sexo.nodeValue.length < 0) {
        warnings += 'el nombre no es valido <br>';
    }
    if (tamaño.nodeValue.length < 0) {
        warnings += 'el nombre no es valido <br>';
    }
    if (especie.nodeValue.length < 0) {
        warnings += 'el nombre no es valido <br>';
    }




})

function register() {

}