<html>
    <head>
        <meta charset="utf-8">
        <title>Juego B2 Parte 1</title>
        <link rel="stylesheet" href="1%20B2%20Sala%201.css" type="text/css">
        <script src="1%20B2%20Sala%201.js" type="text/javascript"></script>
    </head>
        
    <body>       
        <div id="container">
          <div class="contInstruccion">
            <div><img src="archivos/Otros/drag_hand0.png" id="instruccion"></div>
            <div id="instruccion">Click the figures to know the parts of the room</div>
          </div>
          
          <div id="subcontainer">
            <img id="fondo" onclick="myFunction()" src="Archivos/sala-escenario/sala.jpg" >
                
              <div id="cuadro"        onclick="objetos()"></div>
              <div id="lampara"       onclick="objetos()"></div>
              <div id="maceta"        onclick="objetos()"></div>
              <div id="mueble"        onclick="objetos()"></div>
              <div id="libro"         onclick="objetos()"></div>
              <div id="television"    onclick="objetos()"></div>
              <div id="mesa"          onclick="objetos()"></div>
              <div id="florero"       onclick="objetos()"></div>
              <div id="cojinL"        onclick="objetos()"></div>
              <div id="cojinR"        onclick="objetos()"></div>
              
              <div id="personaje">
                <img class="imagen"  src="Archivos/Cocina%20escenario/personaje.png">
              </div>
              <div id="dialogo">
                <img class="imagen"  src="Archivos/Cocina escenario/dialogo.png">
              </div>
              
              <div id="resultado">
                  Hello!, this is the livingroom
              </div>
              <div id="resultado2">
                  ¡Hola!, esta es la sala
              </div>
              <div id="boton" onClick="location='2 B2 Sala 2.php'">START</div>
          </div>
          
        </div>
        
    </body>
</html>