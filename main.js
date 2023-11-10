function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contadador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.clssList[1];
    const idAudio = '#som_$ {instrumento} ; //template string 

    tecla.onclick = function () {

    }
    
}