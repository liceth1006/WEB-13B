import {validateString, vAvg, checkAvg} from './validate.js';
import {paintCard,paintCard2,addStudent,addProfesor,modalAlert} from './paint.js'

const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');

const form=document.getElementById('miForm');


/* Generar eventos
    1. Colocando el metodo en el atributo onlclick, onmouseover, onmouseout de la etiqueta

    const captura = () => {
        console.log('Hizo click');
    }

    2. Metiante propiedad

    btnAgregar.onclick = function () {
        console.log('evento mediante propiedad');
    }

    3. Mediante el addEven......
*/

    



btnAgregar.onclick = function () {
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;
    const profession = document.getElementById('profession').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;

    // console.log(`${name} ${lastName} ${avg} ${op}`);
    if(op==='estudiante'){
        if (validateString(name) && validateString(lastName) && op !=0){
            if ((!isNaN(avg)) && (vAvg(avg))){
            addStudent(name,lastName,avg)
        } else {
            document.querySelector('#promedio').value= "";
            modalAlert("Promedio Invalido");
        }
    } else {
        modalAlert("Datos invalidos, revisar campos");
    }
} else if (op === 'profesorOption') {
    if (validateString(nombre) && validateString(apellido) && op !=0){
            addProfesor(nombre,apellido,profession)
            
            
        }
    } else {
        document.getElementById('nombre').value="";
        document.getElementById('apellido').value="";
        document.querySelector('#profession').value="";
        modalAlert("Datos invalidos, revisar campos");
    }
    
    form.addEventListener('DOMContentLoaded', function(){
        let formulario = document.getElementById('form');
        formulario.addEventListener('submit', function() {
          formulario.reset();
        });
    });        
}

btnMostrar.addEventListener('click', function(){
    const op = document.getElementById('opcion').value;
    if(op=='estudiante'){
    paintCard("ESTUDIANTE");
    }else if(op=='profesorOption'){
    paintCard2("PROFESORES");}
    
});

form.addEventListener("submit",function(event){
    let formulario = document.getElementById('miForm');
    form.reset()
});
