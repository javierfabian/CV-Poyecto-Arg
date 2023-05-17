//menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    if (menu_visible == false) { //si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opcion
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
    links[x].onclick = function() {
        menu.style.display = "none";
        menu_visible = false;
    }
}
//creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra) {
    for (i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


//selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let SEGURIDADINFORMATICA = document.getElementById("seguridadinformatica");
crearBarra(SEGURIDADINFORMATICA);
let REDES = document.getElementById("redes");
crearBarra(REDES);
let CSS1 = document.getElementById("css1");
crearBarra(CSS1);
let RUBY = document.getElementById("ruby");
crearBarra(RUBY);

// a guardar cantidad de barritas que se van a ir pintando por cada barar
//se usa un array, cada posicion pertenece a un elemneto
//comienza en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1, -1, -1, -1, -1, -1];
//variable siguiente la voy a utilizar de flag para saber si se ejecuto la animacion
let entro = false;

//funcion aplica las animaciones de las habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = Window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills >= 300 && entro === false) {
        entro = true;
        const intervalhtml = setInterval(function() {
            pintarBarra(html, 16, 0, intervalhtml);
        }, 100);
        const intervaljavascript = setInterval(function() {
            pintarBarra(javascript, 11, 1, intervaljavascript);
        }, 100);
        const intervalSEGURIDADINFORMATICA = setInterval(function() {
            pintarBarra(SEGURIDADINFORMATICA, 11, 2, intervalSEGURIDADINFORMATICA);
        }, 100);
        const intervalREDES = setInterval(function() {
            pintarBarra(REDES, 15, 3, intervalREDES);
        }, 100);
        const intervalCSS1 = setInterval(function() {
            pintarBarra(CSS1, 16, 4, intervalCSS1);
        }, 100);
        const intervalRUBY = setInterval(function() {
            pintarBarra(RUBY, 11, 5, intervalRUBY);
        }, 100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animacion de la barra
window.onscroll = function() {
    efectoHabilidades();
}