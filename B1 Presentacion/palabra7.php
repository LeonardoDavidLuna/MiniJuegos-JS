<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="utf-8">
    
    <title>Juego B1</title>
    <link rel="stylesheet" type="text/css" href="B1_style.css">
    <script src="B1_script.js" type="text/javascript"></script>
  </head>
   
    <body onload="aleatorio7()">
    
    <div id="container">
       
        <div class="contInstruccion">
            <div><img src="Otros/drag_hand1.png"></div>
            <div id="instruccion">Drag and drop the letters to the correct space</div>
        </div>
       
        <div class='subcontainer'>
	        <div class="contenedorImagenPalabra" id="imagenes" draggable="false">
	        <img src="imagenes/gif7.gif" width="20%" draggable="false">
	        <img src="imagenes/frase7.jpg">
	    </div>
	
	    <div id="containerPalabra">
            <div class="Palabra" id="0"  name="P" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">P</div>
            <div class="Palabra" id="1"  name="l" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">l</div>
            <div class="Palabra" id="2"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="3"  name="a" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">a</div>
            <div class="Palabra" id="4"  name="s" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">s</div>
            <div class="Palabra" id="5"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="6"           ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">,</div>
            <div class="Palabra" id="7"           ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)"> </div>
            <div class="Palabra" id="8"  name="h" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">h</div>
            <div class="Palabra" id="9"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="10" name="l" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">l</div>
            <div class="Palabra" id="11" name="p" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">p</div>
            <div class="Palabra" id="12"          ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)"> </div>
            <div class="Palabra" id="13" name="m" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">m</div>
            <div class="Palabra" id="14" name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="15" name="!">!</div>
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
        <img id="btn" src="Otros/arrow_next.png" onClick="location='palabra8.php'" style='display:none;'>
        
    </div>
           
</div>
   
  </body>
</html>