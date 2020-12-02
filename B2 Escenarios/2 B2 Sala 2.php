<html>
    <head>
        <meta charset="utf-8">
        <title>Juego B2 Parte 1</title>
        <link rel="stylesheet" href="2%20B2%20Sala%202.css" type="text/css">
        <script src="2%20B2%20Sala%202.js" type="text/javascript"></script>
    </head>
        
    <body onload="opcion()">
        <div id="container">
          <div class="contInstruccion">
            <div><img src="archivos/Otros/drag_hand0.png" id="instruccion"></div>
            <div id="resultado">Drag and fill in the blanks</div>
          </div>
          
          <div id="subcontainer">
            <img id="fondo"    src="Archivos/sala-escenario/fill%201.jpg" draggable="false">
                
            <div class="television" id="television" name="television" ondrop="drop(event)" ondragover="allowDrop(event)">
                <!--Televisión-->
            </div>
            <div class="cuadro"     id="cuadro"     name="cuadro"     ondrop="drop(event)" ondragover="allowDrop(event)">
                <!--Cuadro-->
            </div>
            <div class="lampara"    id="lampara"    name="lampara"    ondrop="drop(event)" ondragover="allowDrop(event)">
                <!--Lámpara-->
            </div>
            <div class="florero"    id="florero"    name="florero"    ondrop="drop(event)" ondragover="allowDrop(event)">
                <!--Florero-->
            </div>
            <div class="cojinL"     id="cojinL"     name="cojinL"     ondrop="drop(event)" ondragover="allowDrop(event)">
                <!--Cojín L-->
            </div>
            <div class="cojinR"     id="cojinR"     name="cojinR"     ondrop="drop(event)" ondragover="allowDrop(event)">
                <!--Cojín R-->
            </div>
            
            <!-- --Objetos Drag -- -->
            <div id="objeto1" ondrop="drop(event)" ondragover="allowDrop(event)">
                <img class="imagen" id="fig1"     draggable="true" ondragstart="drag(event)">
            </div>
            <div id="objeto2" ondrop="drop(event)" ondragover="allowDrop(event)">
                <img class="imagen" id="fig2"     draggable="true" ondragstart="drag(event)">
            </div>
            <div id="objeto3" ondrop="drop(event)" ondragover="allowDrop(event)">
                <img class="imagen" id="fig3"     draggable="true" ondragstart="drag(event)">
            </div>
            <div id="objeto4" ondrop="drop(event)" ondragover="allowDrop(event)">
                <img class="imagen" id="fig4"     draggable="true" ondragstart="drag(event)">
            </div>
            <div id="objeto5" ondrop="drop(event)" ondragover="allowDrop(event)">
                <img class="imagen" id="fig5"     draggable="true" ondragstart="drag(event)">
            </div>
            <div id="objeto6" ondrop="drop(event)" ondragover="allowDrop(event)">
                <img class="imagen" id="fig6"     draggable="true" ondragstart="drag(event)">
            </div>
            
            <div id="boton" onClick="location='3 B2 Cocina 1.php'" style='display:none;'>NEXT</div>
          </div>

          
        </div>
        
    </body>
</html>