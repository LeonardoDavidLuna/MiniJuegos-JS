<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="utf-8">
    
    <title>Juego B1</title>
    <link rel="stylesheet" type="text/css" href="B1_style.css">
    <script src="B1_script.js" type="text/javascript"></script>
  </head>
  
    <body onload="aleatorio6()">
    
    <div id="container">
       
        <div class="contInstruccion">
            <div><img src="Otros/drag_hand1.png"></div>
            <div id="instruccion">Drag and drop the letters to the correct space</div>
        </div>
       
        <div class='subcontainer'>
	        <div class="contenedorImagenPalabra" id="imagenes" draggable="false">
	        <img src="imagenes/gif6.gif" width="20%" draggable="false">
	        <img src="imagenes/frase6.jpg">
	    </div>
	
	    <div id="containerPalabra">
            <div class="Palabra" id="0"  name="I" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">I</div>
            <div class="Palabra" id="1"           ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)"> </div>
            <div class="Palabra" id="2"  name="a" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">a</div>
            <div class="Palabra" id="3"  name="m" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">m</div>
            <div class="Palabra" id="4"           ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)"> </div>
            <div class="Palabra" id="5"  name="s" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">s</div>
            <div class="Palabra" id="6"  name="o" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">o</div>
            <div class="Palabra" id="7"  name="r" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">r</div>
            <div class="Palabra" id="8"  name="r" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">r</div>
            <div class="Palabra" id="9"  name="y" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">y</div>
            <div class="Palabra" id="10" name="!">!</div>
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
        <img id="btn" src="Otros/arrow_next.png" onClick="location='palabra7.php'" style='display:none;'>
        
    </div>
           
</div>
   
  </body>
</html>