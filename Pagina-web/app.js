const carruselBotonIzquierda = document.getElementById('carruselBotonIzquierda');
const carruselBotonDerecha = document.getElementById('carruselBotonDerecha');
const carrusel = document.querySelector('.carruselTracker');
const numImg= document.getElementById('contDeImg')
const cantDeImg= numImg.querySelectorAll("img").length;


let posicion = 0;

const totalImagenes = cantDeImg;

function moverCarrusel(){

    carrusel.style.transform = `translateX(-${posicion * 100}%)`;

}



let movimientoAutomatico = setInterval(() => {


    if(posicion < totalImagenes - 1){

        posicion++;

        moverCarrusel();

    }
    else{

        clearInterval(movimientoAutomatico);

    }


},4000);



/* Botón derecha */

carruselBotonDerecha.addEventListener('click',()=>{


    if(posicion < totalImagenes - 1){

        posicion++;

    }
    else{

        posicion = 0;

    }


    moverCarrusel();


});



/* Botón izquierda */

carruselBotonIzquierda.addEventListener('click',()=>{


    if(posicion > 0){

        posicion--;

    }
    else{

        posicion = totalImagenes - 1;

    }


    moverCarrusel();


});