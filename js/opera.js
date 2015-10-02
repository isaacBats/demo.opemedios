//intervalo de tiempo img slider, 5 segundos
setInterval('avanzaSlide()', 3000);

//Se declara el array con las clases de las  imagenes
var arrayImag = new Array(".img1", ".img2", ".img3", ".img4", ".img5");
var contador = 0;

function mostrar (img) {
	$(img).ready(function(){
		$(arrayImag[contador]).fadeIn(1000);
	});
}

//para ocultar una imagen
function ocultar (img) {
	$(img).ready(function(){
		$(arrayImag[contador]).fadeOut(1000);
	});
}


//funcion principal
function avanzaSlide () {
	ocultar(arrayImag[contador]);
	contador = (contador + 1) % 6;
	mostrar(arrayImag[contador]);
}

// alert("Hola estoy en js");

//Para el menu desplegable
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('.menu').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('.menu').animate({
				left: '-100%'
			});
		}
 
	});
 
};