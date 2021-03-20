
document.querySelector('#boton').addEventListener('click', traerDatos);

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
             <td>${i.name}</td>
             <td>${i.age}</td>
             <td>${i.subject}</td>
             <td>${i.field4}</td>
             <td>${i.field5}</td>
             <td>${i.field6}</td>
           </tr>
             `
            }
        
    }
}

