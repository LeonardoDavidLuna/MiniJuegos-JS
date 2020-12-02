<html>
    <head>
        <meta charset="utf-8">
        <title>Juego B2 Parte 1</title>
        <link rel="stylesheet" href="4%20B2%20Cocina%202.css" type="text/css">
        <script src="4%20B2%20Cocina%202.js" type="text/javascript"></script>
    </head>
        
    <body onload="opcion()">
        <div id="container">
          <div class="contInstruccion">
            <div><img src="archivos/Otros/drag_hand0.png" id="instruccion"></div>
            <div id="instruccion">Follow the instruction</div>
          </div>
          
          <div id="subcontainer">
            <img id="fondo" onclick="myFunction()" src="Archivos/Cocina%20escenario/Kitchen-VACIA.jpg" alt="cocina" draggable="false">
             
              <div id="personaje">
                <img class="imagen"  src="Archivos/Cocina%20escenario/personaje.png" draggable="false">
              </div>
              <div id="dialogo">
                <img class="imagen"  src="Archivos/Cocina escenario/dialogo.png" draggable="false">
              </div>
              
              <div id="resultado"></div>
              <div id="resultado2"></div>
              <!--Mesa-->
              <div id="mesa" name="bien" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
              
              <!--Objetos-->
              <div class="containerFrutas">
                <div class="fruta1" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <img class="imagenes" id="arrastrable1" name="mal" draggable="true" ondragstart="drag(event)">
                </div>
                <div class="fruta2" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <img class="imagenes" id="arrastrable2" name="mal" draggable="true" ondragstart="drag(event)">
                </div>
                <div class="fruta3" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <img class="imagenes" id="arrastrable3" name="mal" draggable="true" ondragstart="drag(event)">
                </div>
                <div class="fruta4" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <img class="imagenes" id="arrastrable4" name="mal" draggable="true" ondragstart="drag(event)">
                </div>
                <div class="fruta5" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <img class="imagenes" id="arrastrable5" name="mal" draggable="true" ondragstart="drag(event)">
                </div>    
              </div>
              
          </div>
        
        </div>
        
    </body>
</html>