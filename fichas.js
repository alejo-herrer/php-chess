export function colocarPiezas(tab){

    let cont = 0;

    for(var i = 0 ; i<8 ; i++){
        tab[i][1].innerHTML = `<img src='img/neg-peon.png' draggable='true' class='ficha' data-tipo='0' data-color='0' data-x='${i}' data-y='1'  id='peon-neg-${i}'></img>`;
        tab[i][6].innerHTML = `<img src='img/blan-peon.png' draggable='true' class='ficha' data-tipo='0' data-color='1' data-x='${i}' data-y='6' id='peon-blan-${i}'></img>`;
    }


    for(var i = 0 ; i<8 ; i++){
        if(i == 0 || i == 7){
            tab[i][0].innerHTML = `<img src='img/neg-torr.png' draggable='true' class='ficha' data-tipo='1' data-color='0' data-x='${i}' data-y='0'  id='torr-neg-${cont}'></img>`;
            tab[i][7].innerHTML = `<img src='img/blan-torr.png' draggable='true' class='ficha' data-tipo='1' data-color='1' data-x='${i}' data-y='7' id='torr-blan-${cont}'></img>`;
            cont++;
        }
    }

    for(var i = 0 ; i<8 ; i++){
        if(i == 2 || i == 5){
            tab[i][0].innerHTML = `<img src='img/neg-alf.png' draggable='true' class='ficha' data-tipo='2' data-color='0' data-x='${i}' data-y='0' id='alf-neg-${cont}'></img>`;
            tab[i][7].innerHTML = `<img src='img/blan-alf.png' draggable='true' class='ficha' data-tipo='2' data-color='1' data-x='${i}' data-y='7' id='alf-blan-${cont}'></img>`;
            cont++;
        }
    }
    
    for(var i = 0 ; i<8 ; i++){
        if(i == 1 || i == 6){
            tab[i][0].innerHTML = `<img src='img/neg-cab.png' draggable='true' class='ficha' data-tipo='3' data-color='0' data-x='${i}' data-y='0' id='cab-neg-${cont}'></img>`;
            tab[i][7].innerHTML = `<img src='img/blan-cab.png' draggable='true' class='ficha' data-tipo='3' data-color='1' data-x='${i}' data-y='7' id='cab-blan-${cont}'></img>`;
            cont++;
        }
    }


    tab[3][0].innerHTML = `<img src='img/neg-rey.png' draggable='true' class='ficha' data-tipo='4' data-color='0' data-x='3' data-y='0' id='rey-neg'></img>`;
    tab[4][7].innerHTML = `<img src='img/blan-rey.png' draggable='true' class='ficha' data-tipo='4' data-color='1' data-x='4' data-y='7' id='rey-blan'></img>`;

    tab[4][0].innerHTML = `<img src='img/neg-rein.png' draggable='true' class='ficha' data-tipo='5' data-color='0' data-x='4' data-y='0' id='rein-neg'></img>`;
    tab[3][7].innerHTML = `<img src='img/blan-rein.png' draggable='true' class='ficha' data-tipo='5' data-color='1' data-x='3' data-y='7' id='rein-blan'></img>`;

}