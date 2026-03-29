import * as coordenadas from "./tablero.js";
import * as piezas from "./ficha.js";

    var tab = coordenadas.mapearCoordenadas();

function crearFichas(){

    var fichasNegras =[];
    var fichasBlancas = [];

    for(var i = 0 ; i<8 ; i++){
        fichasNegras[i]=new piezas.Peon(negro,1,i);
        fichasBlancas[i]=new piezas.Peon(negro,1,i);
    }

}
/*function ubicacionPeones(){
    
    var tab = coordenadas.mapearCoordenadas();

    for(var i = 0 ; i<8 ; i++){
        tab[i][1].innerHTML = `<img src='img/neg-peon.png' draggable='true' class='ficha' id='peon-neg-${i}'></img>`;
        tab[i][6].innerHTML = `<img src='img/blan-peon.png' draggable='true' class='ficha' id='peon-blan-${i}'></img>`;
    }

}

function ubicacionTorres(){
    
    var tab = coordenadas.mapearCoordenadas();
    let cont = 0;
    for(var i = 0 ; i<8 ; i++){
        if(i == 0 || i == 7){
            tab[i][0].innerHTML = `<img src='img/neg-torr.png' draggable='true' class='ficha' id='torr-neg-${cont}'></img>`;
            tab[i][7].innerHTML = `<img src='img/blan-torr.png' draggable='true' class='ficha' id='torr-blan-${cont}'></img>`;
            cont++;
        }
    }

}

function ubicacionAlfil(){
    
    var tab = coordenadas.mapearCoordenadas();
    let cont = 0;
    for(var i = 0 ; i<8 ; i++){
        if(i == 2 || i == 5){
            tab[i][0].innerHTML = `<img src='img/neg-alf.png' draggable='true' class='ficha' id='alf-neg-${cont}'></img>`;
            tab[i][7].innerHTML = `<img src='img/blan-alf.png' draggable='true' class='ficha' id='alf-blan-${cont}'></img>`;
            cont++;
        }
    }

}

function ubicacionCaballo(){
    
    var tab = mapearCoordenadas();
    let cont = 0;
    for(var i = 0 ; i<8 ; i++){
        if(i == 1 || i == 6){
            tab[i][0].innerHTML = `<img src='img/neg-cab.png' draggable='true' class='ficha' id='cab-neg-${cont}'></img>`;
            tab[i][7].innerHTML = `<img src='img/blan-cab.png' draggable='true' class='ficha' id='cab-blan-${cont}'></img>`;
            cont++;
        }
    }

}

function ubicacionRey(){
    
    var tab = mapearCoordenadas();

            tab[3][0].innerHTML = `<img src='img/neg-rey.png' draggable='true' class='ficha' id='rey-neg'></img>`;
            tab[4][7].innerHTML = `<img src='img/blan-rey.png' draggable='true' class='ficha' id='rey-blan'></img>`;
}

function ubicacionReina(){
    
    var tab = mapearCoordenadas();

            tab[4][0].innerHTML = `<img src='img/neg-rein.png' draggable='true' class='ficha' id='rein-neg'></img>`;
            tab[3][7].innerHTML = `<img src='img/blan-rein.png' draggable='true' class='ficha' id='rein-blan'></img>`;

}*/