<html>
    <head>
        <meta charset="utf-8">
        <title>Juego B2 Parte 1</title>
        <link rel="stylesheet" href="3%20B2%20Cocina%201.css" type="text/css">
        <script src="3%20B2%20Cocina%201.js" type="text/javascript"></script>
    </head>
        
    <body>       
        <div id="container">
          <div class="contInstruccion">
            <div><img src="archivos/Otros/drag_hand0.png" id="instruccion"></div>
            <div id="instruccion">Click the figures to know the parts of the room</div>
          </div>
          
          <div id="subcontainer">
            <img id="fondo" onclick="myFunction()" src="Archivos/Cocina escenario/Kitchen-imagen.jpg" alt="cocina">
             
              <div id="leche"         onclick="objetos()"></div>
              <div id="microondas"    onclick="objetos()"></div>
              <div id="platos"        onclick="objetos()"></div>
              <div id="estufa"        onclick="objetos()"></div>
              <div id="cucharas"      onclick="objetos()"></div>
              <div id="refrigerador"  onclick="objetos()"></div>
              <div id="vasos"         onclick="objetos()"></div>
              <div id="tazas"         onclick="objetos()"></div>
              <div id="silla"         onclick="objetos()"></div>
              <div id="pan"           onclick="objetos()"></div>
              <div id="sal"           onclick="objetos()"></div>
              <div id="pimienta"      onclick="objetos()"></div>
              <div id="huevos"        onclick="objetos()"></div>
              <div id="queso"         onclick="objetos()"></div>
              <div id="olla"          onclick="objetos()"></div>
              <div id="naranja"       onclick="objetos()"></div>
              <div id="manzana"       onclick="objetos()"></div>
              <div id="sandia"        onclick="objetos()"></div>
              <div id="uvas"          onclick="objetos()"></div>
              <div id="platano"       onclick="objetos()"></div>
              <div id="pina"          onclick="objetos()"></div>
              <div id="manzana2"      onclick="objetos()"></div>
              
              <div id="personaje">
                <img class="imagen"  src="Archivos/Cocina%20escenario/personaje.png">
              </div>
              <div id="dialogo">
                <img class="imagen"  src="Archivos/Cocina escenario/dialogo.png">
              </div>
              
              <div id="resultado">
                  Hello!, this is the Kitchen
              </div>
              <div id="resultado2">
                  ¡Hola!, esta es la Cocina
              </div>
              
              <div id="boton" onClick="location='4 B2 Cocina 2.php'">START</div>
          </div>
          
        </div>
        
    </body>
</html>