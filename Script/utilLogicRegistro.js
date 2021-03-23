document.querySelector('#botonRegistro').addEventListener('click', saveAnimal);

function saveAnimal(){
    var sId = document.querySelector('#txtId').value,
        sMicrochip = document.querySelector('#txtMicrochip').value,
        species = document.querySelector('#txtSpecies').value,
        sSize =  document.querySelector('#txtSize').value,
        spotenciallyDangerous = document.querySelector('#txtPotenciallyDangerous').value,
         sneighborhood= document.querySelector('#txtNeighborhood').value;

         addAnimalToSystem(sId,sMicrochip,species,sSize, spotenciallyDangerous,sneighborhood);
}