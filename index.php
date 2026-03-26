<?php

    include('tablero.php');
    $chess = new tablero();

?>  

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chess Game</title>
    <link rel='stylesheet' href='style.css'>
</head>
<body>
    
    <div class='Tablero'>
        <?php $chess->imprimirTablero(); ?>
    </div>

</body>
</html>


