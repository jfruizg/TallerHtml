var animalesList = [
   
    {id: "", microchip:"" , especie:"", sex:"", size:"", potenciallyDangerous:"", neighborhood:""}

];


window.onload = cargarEventos;

function cargarEventos(){
document.getElementById("visualizar-tabla").addEventListener("click",mostrarTabla, false);
const form = document.getElementById("action")
document.querySelector('#botonRegistro').addEventListener('click', nuevaMascota);


}

function mostrarTabla (){
  var cuerpoTabla = document.getElementById("animales-tabla");
  var tablaLlena = "";

for (var i =0; i < animalesList.length; i++) {
    tablaLlena +=  "<tr><td>"+animalesList[i].id+"</td><td>" +animalesList[i].microchip+"</td><td>"+animalesList[i].especie+"</td><td>"+animalesList[i].sex+"</td><td>"+animalesList[i].size+"</td><td>"+animalesList[i].potenciallyDangerous+"</td><td>"+animalesList[i].neighborhood+"</td></tr>";
}
  
    cuerpoTabla.innerHTML =tablaLlena;
}

function nuevaMascota (event){
    event.preventDefault();
    var idUsuario = document .getElementById("Id").value; 
    var potenciallyDangerousUsuario = document .getElementById("peligrosos").value; 
    var sexUsuario = document .getElementById("sexo").value; 
    var especieUsuario = document .getElementById("especie").value; 
    var sizeUsuario = document .getElementById("sexo").value; 
    var microchipUsuario = document .getElementById("microchip").value; 
    var neighborhoodUsuario = document .getElementById("tamaño").value;     
    var nuevaMascota =  {id:idUsuario, microchip:microchipUsuario , especie:especieUsuario, sex:sexUsuario, size:sizeUsuario, potenciallyDangerous:potenciallyDangerousUsuario, neighborhood:neighborhoodUsuario};
    animalesList.push(nuevaMascota);
}