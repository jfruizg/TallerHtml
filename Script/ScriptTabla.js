
document.querySelector('#boton').addEventListener('click', traerDatos());

function traerDatos() {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '../Script/output.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {



            let datos = JSON.parse(this.responseText);
            console.log(datos);

            let resp = document.querySelector('#res');
            resp.innerHTML = '';

            for (let i of datos) {
                resp.innerHTML += `
            <tr>
            <th scope="row">${i}</th>
             <td>${i.microchip}</td>
             <td>${i.specie}</td>
             <td>${i.sex}</td>
             <td>${i.size}</td>
             <td>${i.potencialDangerous}</td>
             <td>${i.neighborhood}</td> 
              
           </tr>
             `
            }
        
    }
}

