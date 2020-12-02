<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="utf-8">
    
    <title>Juego B1</title>
    <link rel="stylesheet" type="text/css" href="B1_style.css">
    <script src="B1_script.js" type="text/javascript"></script>
  </head>
   
    <body onload="aleatorio11()">
    
    <div id="container">
       
        <div class="contInstruccion">
            <div><img src="Otros/drag_hand1.png"></div>
            <div id="instruccion">Drag and drop the letters to the correct space</div>
        </div>
       
        <div class='subcontainer'>
	        <div class="contenedorImagenPalabra" id="imagenes">
	        <img src="imagenes/gif11.gif" width="25%" draggable="false">
	        <img src="imagenes/frase11.jpg" width="50%" draggable="false">
	    </div>
	
	    <div id="containerPalabra">
            <div class="Palabra" id="0"  name="G" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">G</div>
            <div class="Palabra" id="1"  name="o" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">o</div>
            <div class="Palabra" id="2"  name="o" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">o</div>
            <div class="Palabra" id="3"  name="d" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">d</div>
            <div class="Palabra" id="4"  name="b" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">b</div>
            <div class="Palabra" id="5"  name="y" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">y</div>
            <div class="Palabra" id="6"  name="e" ondrop="drop(event)" ondragover="allowDrop(event)" ondragend="end(event)">e</div>
            <div class="Palabra" id="7" name="!">!</div>
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
        <img id="btn" src="Otros/arrow_next.png" onClick="location='good_job.php'" style='display:none;'>
        
        
    </div>
           
</div>
   
  </body>
</html>