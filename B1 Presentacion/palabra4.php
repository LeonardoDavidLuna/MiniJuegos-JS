<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="utf-8">
    
    <title>Juego B1</title>
    <link rel="stylesheet" type="text/css" href="B1_style.css">
    <script src="B1_script.js" type="text/javascript"></script>
  </head>
   
    <body onload="aleatorio4()">
    
    <div id="container">
       
        <div class="contInstruccion">
            <div><img src="Otros/drag_hand1.png"></div>
            <div id="instruccion">Drag and drop the letters to the correct space</div>
        </div>
       
        <div class='subcontainer'>
	        <div class="contenedorImagenPalabra" id="imagenes" draggable="false">
	        <img src="imagenes/gif4.gif" width="18%" draggable="false">
	        <img src="imagenes/frase4.jpg">
	    </div>
	
	    <div id="containerPalabra">
            <div class="Palabra" id="0"  name="Y" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">Y</div>
            <div class="Palabra" id="1"  name="o" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">o</div>
            <div class="Palabra" id="2"  name="u" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">u</div>
            <div class="Palabra" id="3"           ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)"> </div>
            <div class="Palabra" id="4"  name="a" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">a</div>
            <div class="Palabra" id="5"  name="r" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">r</div>
            <div class="Palabra" id="6"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="7"           ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)"> </div>
            <div class="Palabra" id="8"  name="w" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">w</div>
            <div class="Palabra" id="9"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="10" name="l" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">l</div>
            <div class="Palabra" id="11" name="c" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">c</div>
            <div class="Palabra" id="12" name="o" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">o</div>
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
        <img id="btn" src="Otros/arrow_next.png" onClick="location='palabra5.php'" style='display:none;'>
        
    </div>
           
</div>
   
  </body>
</html>