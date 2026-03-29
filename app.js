import * as tablero from "./tablero.js";
import * as fichas from "./fichas.js";
import * as moverFichas from "./moverFichas.js";

const tab = tablero.mapearCoordenadas();
fichas.colocarPiezas(tab);
var movPerm = moverFichas.movPeon(tab);
moverFichas.moverPiezas(tab, 0, movPerm[0], movPerm[1]);