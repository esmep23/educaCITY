/*
Maruri 2013
Estefania Pulgar S.
*/

function buttons(){
 $("#player-1").on("touchstart", function(){ alert(1); player='1'; instructions(); });
 $("#player-2").on("touchstart", function(){ alert(2); player='2'; instructions(); });
 //instructions();
 $("#empezar").on("touchstart", function(){ alert(3); empezar(); });
 $("#avanza").on("touchstart", function(){ alert(4); multiplayer(); });
}

function instructions(){
	document.getElementById('part1').style.display="none";
	document.getElementById('part2').style.display="block";
	//alert(player);
}
function empezar(){
	document.getElementById('part2').style.display="none";
	document.getElementById('part3').style.display="block";
}
function multiplayer(){
	document.getElementById('part3').style.display="none";
	document.getElementById('part4').style.display="block";
	objetosCanvas();
}

function objetosCanvas(){
	//carritoCompras();
	sello();
	bomba();
	camaron();
	carne();
	galleta();
	barril();
	peperoni();
	pollo();
	queso();
}
/*
---------------------------------------------------------------------------------------
OBJETOS ON CANVAS
---------------------------------------------------------------------------------------
*/
function carritoCompras(){
	var canvas = document.getElementById('carrito');
	var context = canvas.getContext('2d');
	var imagenCarrito = new Image();
	
	imagenCarrito.onload = function(){
		context.drawImage(imagenCarrito, 0, 0, 206, 175);
	};
	imagenCarrito.src = "img/carrito.png";
}

function sello(){
	var canvas = document.getElementById('sello');
	var context = canvas.getContext('2d');
	var picSello = new Image();

	picSello.onload = function(){
		context.drawImage(picSello, 0, 0, 84, 82);
	};
	picSello.src = "img/sello.png";
}

function bomba(){
	var canvas = document.getElementById('bomba');
	var context = canvas.getContext('2d');
	var picBomba = new Image();

	picBomba.onload = function(){
		context.drawImage(picBomba, 0, 0, 63, 101);
	};
	picBomba.src = "img/bom.png";
}

function camaron(){
	var canvas = document.getElementById('camaron');
	var context = canvas.getContext('2d');
	var picCamaron = new Image();

	picCamaron.onload = function(){
		context.drawImage(picCamaron, 0, 0, 61, 64);
	};
	picCamaron.src = "img/camaron.png";
}

function carne(){
	var canvas = document.getElementById('carne');
	var context = canvas.getContext('2d');
	var picCarne = new Image();

	picCarne.onload = function(){
		context.drawImage(picCarne, 0, 0, 65, 64);
	};
	picCarne.src = "img/carne.png";
}

function galleta(){
	var canvas = document.getElementById('galleta');
	var context = canvas.getContext('2d');
	var picGalleta = new Image();

	picGalleta.onload = function(){
		context.drawImage(picGalleta, 0, 0, 70, 78);
	};
	picGalleta.src = "img/galleta.png";
}

function barril(){
	var canvas = document.getElementById('barril');
	var context = canvas.getContext('2d');
	var picBarril = new Image();
	
	picBarril.onload = function(){
		context.drawImage(picBarril, 0, 0, 64, 77);
	};
	picBarril.src = "img/barril.png";
}

function peperoni(){
	var canvas = document.getElementById('peperoni');
	var context = canvas.getContext('2d');
	var picPeperoni = new Image();
	
	picPeperoni.onload = function(){
		context.drawImage(picPeperoni, 0, 0, 65, 69);
	};
	picPeperoni.src = "img/peperoni.png";	
}
function pollo(){
	var canvas = document.getElementById('pollo');
	var context = canvas.getContext('2d');
	var picPollo = new Image();
	
	picPollo.onload = function(){
		context.drawImage(picPollo, 0, 0, 61, 67);
	};
	picPollo.src = "img/pollo.png";	
}
function queso(){
	var canvas = document.getElementById('queso');
	var context = canvas.getContext('2d');
	var picQueso = new Image();
	
	picQueso.onload = function(){
		context.drawImage(picQueso, 0, 0, 74, 82);
	};
	picQueso.src = "img/queso.png";
}

/*
------------------------------------------------------------------------------------------------
ANIMACION BASICA
-------------------------------------------------------------------------------
*/

var canvas = $("#canvasElement");
var context = canvas.get(0).getContext("2d");
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
var x = 10;
var y = 10;
function moveBox() {
context.clearRect(0,0, canvasWidth, canvasHeight);
context.fillRect(x, y, 10, 10);
x++;
setTimeout(moveBox, 33);
}