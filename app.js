import * as piezas from "./ficha.js";

function crearTablero(){

    var tab = [];

    for(var i = 0 ; i<8 ; i++){
        tab[i] = [];
        for(var v = 0 ; v<8 ; v++){
            tab[i][v] = null;
        }
    }

    for(var i = 0 ; i<8 ; i++){

        tab[1][i]= new piezas.Peon('negro',i,1);
        tab[6][i]= new piezas.Peon('blanco',i,6);

        if(i == 0 || i == 7){
            tab[0][i] = new piezas.Torre('negro',i,0);
            tab[7][i] = new piezas.Torre('blanco',i,7); 
        }

        if(i == 1 || i == 6){
            tab[0][i] = new piezas.Caballo('negro',i,0);
            tab[7][i] = new piezas.Caballo('blanco',i,7); 
        }

        if(i == 2 || i == 5){
            tab[0][i] = new piezas.Alfil('negro',i,0);
            tab[7][i] = new piezas.Alfil('blanco',i,7); 
        }

    }

    tab[0][4] = new piezas.Rey('negro',3,0);
    tab[7][4] = new piezas.Rey('blanco',4,7); 
    tab[0][3] = new piezas.Reina('negro',4,0);
    tab[7][3] = new piezas.Reina('blanco',3,7); 

    return tab;

}

console.log(crearTablero());

function renderizarTab(tab){

    for(let casX of tab){
        for(let cel of casX){
            if(cel !== null){
                let celda = document.getElementById(`cel-${cel.x}-${cel.y}`);
                let img = document.createElement('img')
                img.style = 'height: 100%; width: 100%; object-fit:cover;'
                img.src = `img/${cel.color}${cel.tipo}.png`;
                celda.appendChild(img);
            }
        }
    }
}


var tableroAjedrez = crearTablero();
renderizarTab(tableroAjedrez);

