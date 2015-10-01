//intervalo de tiempo img slider, 5 segundos
setInterval('avanzaSlide()', 5000);

//Se declara el array con las clases de las  imagenes
var arrayImag = new Array(".img1", ".img2", ".img3", ".img4", ".img5");
var contador = 0;

function mostrar (img) {
	$(img).ready(function(){
		$(arrayImag[contador]).fadeIn(1500);
	});
}

//para ocultar una imagen
function ocultar (img) {
	$(img).ready(function(){
		$(arrayImag[contador]).fadeOut(1500);
	});
}


//funcion principal
function avanzaSlide () {
	ocultar(arrayImag[contador]);
	contador = (contador + 1) % 6;
	mostrar(arrayImag[contador]);
}

// alert("Hola estoy en js");