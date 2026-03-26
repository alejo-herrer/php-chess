<?php

    class tablero {

        public $tablero = [];

        public function __construct(){

            for($i = 0 ; $i<8 ; $i++){
                    for($v = 0 ; $v<8 ; $v++){
                        $this->tablero[$i][$v] = ($i + $v) % 2 == 0 ? 'B' : 'N';
                    }
                
            }

        }

        public function imprimirTablero(){

            foreach($this->tablero as $i=>$col){ 
                echo "<div class = 'col-tab'>";
                foreach($col as $v=>$fil){

                   echo ($fil == 'B')  ? "<div class='cas-blanca' data-x='$i' data-y='$v'></div>" : "<div class='cas-negra' data-x='$i' data-y='$v'></div>";
                   
                    
                }
                echo "</div>";
            }

        }
        

    }


?>