class mascota {
      id
      microchip
      species
      sex
      size
      potentDangerous
      neighborhood
  
      constructor(id, microchip, species, sex, size, potentDangerous, neighborhood) {
          this.id = id;
          this.microchip = microchip;
          this.species = species;
          this.sex = sex;
          this.size = size;
          this.potentDangerous = potentDangerous;
          this.neighborhood = neighborhood;
      }
  }
  
  const form = document.getElementById("action")
  var baseDatos = [];
  form.addEventListener("submit", e => {
      const id = 12000;
      const microchip = 12312312;
      const localidad = document.getElementById('localidad').value;
      const peligrosos = document.getElementById('peligrosos').value;
      const sexo = document.getElementById('sexo').value;
      const tamaño = document.getElementById('tamaño').value;
      const especie = document.getElementById('especie').value;
  
  
      if (localidad != "" && peligrosos != "" && sexo != "" && tamaño != "" && especie != "" ){
  
  
          const obj = new mascota(id, microchip, especie, sexo, tamaño, peligrosos, localidad)
      console.log(obj);
      baseDatos.push(obj);
  
      e.preventDefault();
     }else{
          alert('Agregar datos')
     }
  })
  
  
