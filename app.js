import * as piezas from "./ficha.js";

class Partida {

    constructor(jugadorNeg,jugadorBlan,numeroPart){
        this.jugadorNeg = jugadorNeg;
        this.jugadorBlan = jugadorBlan;
        this.numeroPart = numeroPart;
        this.color = 'blanco';
        this.tab = this.crearTablero();

    }

    crearTablero(){

        var tab = [];

        for(var i = 0 ; i<8 ; i++){
            tab[i] = [];
            for(var v = 0 ; v<8 ; v++){
                tab[i][v] = null;
            }
        }

        for(var i = 0 ; i<8 ; i++){

            tab[i][1]= new piezas.Peon('negro',i,1);
            tab[i][6]= new piezas.Peon('blanco',i,6);

            if(i == 0 || i == 7){
                tab[i][0] = new piezas.Torre('negro',i,0);
                tab[i][7] = new piezas.Torre('blanco',i,7); 
            }

            if(i == 1 || i == 6){
                tab[i][0] = new piezas.Caballo('negro',i,0);
                tab[i][7] = new piezas.Caballo('blanco',i,7); 
            }

            if(i == 2 || i == 5){
                tab[i][0] = new piezas.Alfil('negro',i,0);
                tab[i][7] = new piezas.Alfil('blanco',i,7); 
            }

        }

        tab[4][0] = new piezas.Rey('negro',4,0);
        tab[4][7] = new piezas.Rey('blanco',4,7); 
        tab[3][0] = new piezas.Reina('negro',3,0);
        tab[3][7] = new piezas.Reina('blanco',3,7); 

        return tab;

    }

    renderizarTab(tab){

        for(let x = 0; x < 8; x++){
            for(let y = 0; y < 8; y++){
                document.getElementById(`cel-${x}-${y}`).innerHTML = "";
            }
        }

        for(let casX of tab){
            for(let cel of casX){
                if(cel !== null){
                    let celda = document.getElementById(`cel-${cel.x}-${cel.y}`);
                    let img = document.createElement('img')
                    img.style = 'height: 100%; width: 100%; object-fit:cover;'
                    img.dataset.x = cel.x;
                    img.dataset.y = cel.y;
                    img.draggable = true;
                    img.src = `img/${cel.color}${cel.tipo}.png`;
                    celda.appendChild(img);
                }
            }
        }
    }

    guardarPartida(){
        const estado = {
            jugadorNeg: this.jugadorNeg,
            jugadorBlan: this.jugadorBlan,
            numeroPart: this.numeroPart,
            color: this.color,
            tab: this.tab
        };

        localStorage.setItem("partidaActual", JSON.stringify(estado));
    }

    cargarPartida(){
        const guardado = localStorage.getItem("partidaActual");

        if(!guardado) return false;

        const datos = JSON.parse(guardado);

        this.jugadorNeg = datos.jugadorNeg;
        this.jugadorBlan = datos.jugadorBlan;
        this.numeroPart = datos.numeroPart;
        this.color = datos.color;
        this.tab = datos.tab;

        return true;
    }

    movFichas(tab){

        let piezaMov;
        const tablero = document.getElementById('tab');

        tablero.addEventListener('dragstart', e => {

            let datos = {
                x: e.target.dataset.x,
                y: e.target.dataset.y
            }

            e.dataTransfer.setData('text/plain', JSON.stringify(datos));

            piezaMov = tab[Number(datos.x)][Number(datos.y)];
        });
            

        tablero.addEventListener('dragover', e =>{
            e.preventDefault();
        })
        tablero.addEventListener('drop', e =>{
            e.preventDefault();
            let X = Number(e.target.dataset.x);
            let Y = Number(e.target.dataset.y);

            if(this.color === piezaMov.color){
                if(tab[X][Y] == null && piezaMov.movPiez(tab).some(mov => mov[0] == X && mov[1] == Y && mov[2] == 0)){
                    tab[piezaMov.x][piezaMov.y] = null;
                    tab[X][Y] = piezaMov;

                    piezaMov.x = X;
                    piezaMov.y = Y;
                    this.renderizarTab(tab);
                    this.color === 'blanco' ? this.color = 'negro' : this.color = 'blanco';

                    this.guardarPartida();

                } else if(tab[X][Y] !== null && piezaMov.movPiez(tab).some(mov => mov[0] == X && mov[1] == Y && mov[2] == 1)){
                    tab[piezaMov.x][piezaMov.y] = null;
                    tab[X][Y] = piezaMov;

                    piezaMov.x = X;
                    piezaMov.y = Y;
                    this.renderizarTab(tab);
                    this.color === 'blanco' ? this.color = 'negro' : this.color = 'blanco';

                    this.guardarPartida();
                } else {
                    alert('No puedes mover la pieza alli')
                }
            } else {
                alert('No te toca mover a ti');
            }
        });
        
    }

    empezarPartida(){

        //this.cargarPartida();
        this.renderizarTab(this.tab);
        this.movFichas(this.tab);

    }

}

var partida = new Partida('Juanito','Pedrito',1);
partida.empezarPartida();
