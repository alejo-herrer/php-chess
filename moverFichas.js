export function moverPiezas(tab,estado,movPermX,movPermY){

    const chess = document.getElementById('tab');

    chess.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
            
    for(var i = 0 ; i<8 ; i++){
        for(var v = 0 ; v<8 ; v++){
            tab[i][v].addEventListener('dragover', e =>{
                e.preventDefault();
            });
            tab[i][v].addEventListener('drop', e =>{
                e.preventDefault();
                if (e.currentTarget.children.length === 0 && estado === 0 ) {
                    const id = e.dataTransfer.getData('text/plain');
                    const pieza = document.getElementById(id);
                    if(Number(e.currentTarget.dataset.x))
                    e.currentTarget.appendChild(pieza);
                    console.log(v);
                    console.log(Number(e.currentTarget.dataset.x));
                }else if (estado === 1 && e.currentTarget && movPermY.includes(Number(e.currentTarget.dataset.x)-v) && movPermX.includes(Number(e.currentTarget.dataset.y)-i)){
                    const id = e.dataTransfer.getData('text/plain');
                    const pieza = document.getElementById(id);
                    e.currentTarget.textContent= "";
                    e.currentTarget.appendChild(pieza);
                }else{
                    alert('No puedes mover la pieza alli')
                }
            });
        }
    }
}


export function movPeon(tab){

    var movPerm = [];

    for(var j = 0 ; j<8 ; j++){
        for(var v = 0 ; v<8 ; v++){
            const pieza = tab[j][v].querySelector('img');
            if(pieza && (pieza.id === `peon-blan-${v}` || pieza.id ===`peon-neg-${v}`)){

                var movPermX = [0, 1, 2];
                var movPermY = [0];

                movPerm[0] = movPermX;
                movPerm[1] = movPermY;
            }
        }
    }

    
    return movPerm;

}


