import {validateString, vAvg, checkAvg} from './validate.js';
import {paintCard,paintCard2,addStudent,addProfesor,modalAlert} from './paint.js'
const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');
const seleccion = document.querySelector('#opcion');
const labelProfession= document.querySelector('#prof');
const inputProfession= document.querySelector('#profession');
const labelPromedio= document.querySelector('#prom');
const inputPromedio= document.querySelector('#promedio');
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

//remuve para borrar/cambia los imput segun seleccion  evento onchange
seleccion.onchange = function () {
    let op = document.querySelector('#opcion').value;
    if(op==='profesorOption'){
        document.querySelector('#prom').innerHTML="edad";
        if(labelProfession.classList.contains('oculto_label')){
            labelProfession.classList.remove('oculto_label');
            labelProfession.classList.add('labelVisible');
        }
        if(inputProfession.classList.contains('oculto')){
            inputProfession.classList.remove('oculto');
            inputProfession.classList.add('buscarVisible');
        }
        if(labelPromedio.classList.contains('oculto_label')){
            labelPromedio.classList.remove('oculto_label');
            labelPromedio.classList.add('labelVisible');
        }
        if(inputPromedio.classList.contains('oculto')){
            inputPromedio.classList.remove('oculto');
            inputPromedio.classList.add('buscarVisible');
        }
    }
    if(op==='estudiante'){
        document.querySelector('#prom').innerHTML="Promedio";
        if(labelPromedio.classList.contains('oculto_label')){
            labelPromedio.classList.remove('oculto_label');
            labelPromedio.classList.add('labelVisible');
        }
        if(inputPromedio.classList.contains('oculto')){
            inputPromedio.classList.remove('oculto');
            inputPromedio.classList.add('buscarVisible');
        }
    }

}
   
//evento onclick
btnAgregar.onclick = function () {
    const name = document.getElementById('nombre').value;
    const lastName = document.getElementById('apellido').value;
    const avg = parseFloat(document.getElementById('promedio').value);
    const op = document.getElementById('opcion').value;
    const profession = document.getElementById('profession').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('promedio').value;
    if(op==='estudiante'){
        if (validateString(name) && validateString(lastName) && op !=0){
            if ((!isNaN(avg)) && (vAvg(avg))){
            addStudent(name,lastName,avg)
            document.getElementsByClassName("control").value = "";
        } else {
            document.querySelector('#promedio').value= "";
            modalAlert("Promedio Invalido");
        }
    } else {
        modalAlert("Datos invalidos, revisar campos");
    }
} else if (op === 'profesorOption') {
    if (validateString(nombre) && validateString(apellido) && op !=0){
            addProfesor(nombre,apellido,profession,edad)
             

            
        }
    } else {
        document.getElementById('nombre').value="";
        document.getElementById('apellido').value="";
        document.querySelector('#profession').value="";
        modalAlert("Datos invalidos, revisar campos");
    }

                 
}
//muestra en pantalla lo ingresado
btnMostrar.addEventListener('click', function(){
    const op = document.getElementById('opcion').value;
    if(op=='estudiante'){
    paintCard("ESTUDIANTE");
    }else if(op=='profesorOption'){
    paintCard2("PROFESORES");}

    if(op!=0) {
        if(labelPromedio.classList.contains('labelVisible')){
            labelPromedio.classList.remove('labelVisible');
            labelPromedio.classList.add('oculto_label');
        }
        if(inputPromedio.classList.contains('buscarVisible')){
            inputPromedio.classList.remove('buscarVisible');
            inputPromedio.classList.add('oculto');
        }
        if(labelProfession.classList.contains('labelVisible')){
            labelProfession.classList.remove('labelVisible');
            labelProfession.classList.add('oculto_label');
        }
        if(inputProfession.classList.contains('buscarVisible')){
            inputProfession.classList.remove('buscarVisible');
            inputProfession.classList.add('oculto');
        }
    }

    document.getElementById("miForm").reset();
});


