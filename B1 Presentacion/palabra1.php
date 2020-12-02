<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="utf-8">
    
    <title>Juego B1</title>    
    <link rel="stylesheet" type="text/css" href="B1_style.css">
    <script src="B1_script.js" type="text/javascript"></script>
  </head>
   
    <body onload="aleatorio1()">
    
    <div id="container">
       
        <div class="contInstruccion">
            <div><img src="Otros/drag_hand1.png"></div>
            <div id="instruccion">Drag and drop the letters to the correct space</div>
        </div>
       
        <div class='subcontainer'>
	        <div class="contenedorImagenPalabra" id="imagenes">
	        <img src="imagenes/gif1.gif" width="20%" draggable="false">
	        <img src="imagenes/frase1.jpg" draggable="false">
	    </div>
	
	    <div id="containerPalabra">
            <div class="Palabra" id="0"  name="H" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">H</div>
            <div class="Palabra" id="1"  name="a" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">a</div>
            <div class="Palabra" id="2"  name="v" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">v</div>
            <div class="Palabra" id="3"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="4"  name="0"> </div>
            <div class="Palabra" id="5"  name="a" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">a</div>
            <div class="Palabra" id="6"  name="0"> </div>
            <div class="Palabra" id="7"  name="n" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">n</div>
            <div class="Palabra" id="8"  name="i" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">i</div>
            <div class="Palabra" id="9"  name="c" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">c</div>
            <div class="Palabra" id="10" name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="11" name="0"> </div>
            <div class="Palabra" id="12" name="d" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">d</div>
            <div class="Palabra" id="13" name="a" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">a</div>
            <div class="Palabra" id="14" name="y" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">y</div>
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
        <img id="btn" src="Otros/arrow_next.png" onClick="location='palabra2.php'" style='display:none;'>
        
    </div>
        
</div>
   
  </body>
</html>