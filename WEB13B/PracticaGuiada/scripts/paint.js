import {checkAvg} from './validate.js'
const cardE = document.getElementById('cardsEstudiantes');
const cardP = document.getElementById('cardsProfesores');
const students = [];
const profesor = [];
//hacer tarjeta estudiante pintar
const paintCard = (typ) => {
    typ = typ.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateStudent = document.querySelector('#templateEstudiante').content;
    if (typ === 'ESTUDIANTE') {
        for (let i of students){
            const cloneTemp = templateStudent.cloneNode(true);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>.";
            cloneTemp.querySelector('.data-card').innerHTML = `NOMBRE: ${i.nom.toUpperCase()} APELLIDOS: ${i.ape.toUpperCase()}`;
            cloneTemp.querySelector('.text-promedio').innerHTML = `PROMEDIO ES: ${i.prom}`;
            cloneTemp.querySelector(`.text-aprobado`).innerHTML = `${checkAvg(i.prom)}`;
            fragment.appendChild(cloneTemp);
        }
    } else {

    }
    cardE.appendChild(fragment);
};
//tarjeta profesor
const paintCard2 = (typ2) => {
    typ2 = typ2.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateProfesor = document.querySelector('#templateProfesor').content;
    if (typ2 === 'PROFESORES') {
        for (let i of profesor){
            const cloneTemp = templateProfesor.cloneNode(true);
            cloneTemp.querySelector('.title-card2').innerHTML = "Datos del <i>profesor</i>.";
            cloneTemp.querySelector('.data-card2').innerHTML = `NOMBRE: ${i.nomp.toUpperCase()} APELLIDOS: ${i.apep.toUpperCase()}`;
            cloneTemp.querySelector(`.lead`).innerHTML = `EDAD:${(i.edad)}`;//edi
            cloneTemp.querySelector('.profesion').innerHTML = `PROFESION ES: ${i.prof.toUpperCase()}`;
            fragment.appendChild(cloneTemp);
        }
    } else {

    }
        cardP.appendChild(fragment);
};
//adicionar los estudiantes
const addStudent = (name,lastName,avg) => {
    //Objeto literal de JS
    let student = {
        nom: name,
        ape: lastName,
        prom: avg
    }
    students.push(student);
    modalAlert("Se agrego el estudiante")
}
//adicionar los profesores
const addProfesor = (nombre,apellido,profession,age) => {
    //Objeto literal de JS
    let profe = {
        nomp: nombre,
        apep: apellido,
        edad: age,//edi
        prof: profession
    }
    profesor.push(profe);
    modalAlert("Se agrego el profesor")
}

//modal 
const modalAlert = (cad) => {
    const alerta = document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src = './img/cruz.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML = `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta").remove();
    }

}
function limpiarFormulario() {
    document.getElementById("miForm").reset();
}

export {paintCard,paintCard2,addStudent,addProfesor,modalAlert}