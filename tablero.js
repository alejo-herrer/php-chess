export function mapearCoordenadas(){

    var tab = [];

    for(var i = 0 ; i<8 ; i++){
        tab[i] = [];
        for(var v = 0 ; v<8 ; v++){
            tab[i][v] = null;
        }
    }

    return tab;
    
};