<html>
    <head>
        <title>Juego B4</title>    
            <link rel="stylesheet" href="1%20B4%20Expresiones.css" type="text/css">
            <script src="1%20B4%20Expresiones.js" type="text/javascript"></script>
    </head>

    <body onload="opcion()">
    
    <div id="container">
        <div class="contInstruccion">
        <div><img src="archivos/otros/drag_hand1.png" id="instruccion"></div>
        <div id="instruccion">Drag and drop the faces to the correct spaces</div>
    </div>
        <div id="subcontainer">
			<div class="ladoA">
			    <div class="faceContainer">
			        <div class="contImagen" ondrop="drop(event)" ondragover="allowDrop(event)">
			            <img class="figura" id="figura1" name="mal" draggable="true" ondragstart="drag(event)"/>
			        </div>
			        <div class="contImagen" ondrop="drop(event)" ondragover="allowDrop(event)">
			            <img class="figura" id="figura2" name="mal" draggable="true" ondragstart="drag(event)"/>
			        </div>
			        <div class="contImagen" ondrop="drop(event)" ondragover="allowDrop(event)">
			            <img class="figura" id="figura3" name="mal"  draggable="true" ondragstart="drag(event)"/>
			        </div>
			        <div class="contImagen" ondrop="drop(event)" ondragover="allowDrop(event)">
			            <img class="figura" id="figura4" name="mal"  draggable="true" ondragstart="drag(event)"/>
			        </div>
			        <div class="contImagen" ondrop="drop(event)" ondragover="allowDrop(event)">
			            <img class="figura" id="figura5" name="mal"  draggable="true" ondragstart="drag(event)"/>
			        </div>
			        <div class="contImagen" ondrop="drop(event)" ondragover="allowDrop(event)">
			            <img class="figura" id="figura6" name="mal"  draggable="true" ondragstart="drag(event)"/>
			        </div>
			    </div>
			</div>
			
			<div class="ladoB">
			    <div class="faceContainer2">
                    <div class="contRespuesta" id="imagen1" name="bien" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
			    </div>
			    <div id="palabra"></div>
			    <div id="palabra2"></div>
			 </div>
        </div>
    </div>
     
    </body>
</html>