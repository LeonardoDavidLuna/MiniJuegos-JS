<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="utf-8">
    
    <title>Juego B1</title>
    <link rel="stylesheet" type="text/css" href="B1_style.css">
    <script src="B1_script.js" type="text/javascript"></script>
  </head>
   
    <body onload="aleatorio5()">
    
    <div id="container">
       
        <div class="contInstruccion">
            <div><img src="Otros/drag_hand1.png"></div>
            <div id="instruccion">Drag and drop the letters to the correct space</div>
        </div>
       
        <div class='subcontainer'>
	        <div class="contenedorImagenPalabra" id="imagenes" draggable="false">
	        <img src="imagenes/gif5.gif" width="20%" draggable="false">
	        <img src="imagenes/frase5.jpg">
	    </div>
	
	    <div id="containerPalabra">
            <div class="Palabra" id="0"  name="E" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">E</div>
            <div class="Palabra" id="1"  name="x" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">x</div>
            <div class="Palabra" id="2"  name="c" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">c</div>
            <div class="Palabra" id="3"  name="u" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">u</div>
            <div class="Palabra" id="4"  name="s" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">s</div>
            <div class="Palabra" id="5"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="6"> </div>
            <div class="Palabra" id="7"  name="m" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">m</div>
            <div class="Palabra" id="8"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="9"  name="!">!</div>
        </div>
       	        
        <div id="containerLetras">
            <div class="contLetrasCasillas" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">
                <div class="Letras" id="letra1" draggable="true" ondragstart="drag(event)"></div>
            </div>
            <div class="contLetrasCasillas" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">
                <div class="Letras" id="letra2" draggable="true" ondragstart="drag(event)"></div>
            </div>
            <div class="contLetrasCasillas" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">
                <div class="Letras" id="letra3" draggable="true" ondragstart="drag(event)"></div>
            </div>
        </div>
        
            <div id="resultado"></div>
            <img id="btn" src="Otros/arrow_next.png" onClick="location='palabra6.php'" style='display:none;'>
        
    </div>
           
</div>
   
  </body>
</html>