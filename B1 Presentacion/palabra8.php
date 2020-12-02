<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="utf-8">
    
    <title>Juego B1</title>
    <link rel="stylesheet" type="text/css" href="B1_style.css">
    <script src="B1_script.js" type="text/javascript"></script>
  </head>
   
    <body onload="aleatorio8()">
    
    <div id="container">
       
        <div class="contInstruccion">
            <div><img src="Otros/drag_hand1.png"></div>
            <div id="instruccion">Drag and drop the letters to the correct space</div>
        </div>
       
        <div class='subcontainer'>
	        <div class="contenedorImagenPalabra" id="imagenes">
	        <img src="imagenes/gif8.gif" width="24%" draggable="false">
	        <img src="imagenes/frase8.jpg" width="75%" draggable="false">
	    </div>
	
	    <div id="containerPalabra">
            <div class="Palabra" id="0"  name="G" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">G</div>
            <div class="Palabra" id="1"  name="o" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">o</div>
            <div class="Palabra" id="2"  name="o" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">o</div>
            <div class="Palabra" id="3"  name="d" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">d</div>
            <div class="Palabra" id="4"           ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)"> </div>
            <div class="Palabra" id="5"  name="a" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">a</div>
            <div class="Palabra" id="6"  name="f" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">f</div>
            <div class="Palabra" id="7"  name="t" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">t</div>
            <div class="Palabra" id="8"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="9"  name="r" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">r</div>
            <div class="Palabra" id="10" name="n" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">n</div>
            <div class="Palabra" id="11" name="o" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">o</div>
            <div class="Palabra" id="12" name="o" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">o</div>
            <div class="Palabra" id="13" name="n" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">n</div>
            <div class="Palabra" id="14" name="!">!</div>
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
        <img id="btn" src="Otros/arrow_next.png" onClick="location='palabra9.php'" style='display:none;'>
        
    </div>
           
</div>
   
  </body>
</html>