<html>
    <head>
        <title>Juego B5</title>    
            <link rel="stylesheet" href="2%20B5%20Mapa%202.css" type="text/css">
            <script src="2%20B5%20Mapa_2.js" type="text/javascript"></script>
    </head>

    <body onload="opcion()">
        
        <div id="container">
           
        <div class="contInstruccion">
            <div><img src="archivos/otros/drag_hand1.png" id="instruccion"></div>
            <div id="instruccion">Place the figures in the corresponding place</div>
        </div>
           
            <div id="subcontainer">
            <div id="mapa-container">
                <img id="imagenx" src="Archivos/Transparentes/mapa_vacio.png" draggable="false">
            </div>
            
                <div id="container-estrella">
                    <img id="imagenx" src="Archivos/Transparentes/puntos_cardinales.png" draggable="false">
                </div>
            
                <!-- Objetos -->   
                <div id="figura1" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <img class="imagen" id="imagen1" draggable="true" ondragstart="drag(event)">
                </div>
                <div id="figura2" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <img class="imagen" id="imagen2" draggable="true" ondragstart="drag(event)">
                </div>
                <div id="figura3" ondrop="drop(event)" ondragover="allowDrop(event)">
                    <img class="imagen" id="imagen3" draggable="true" ondragstart="drag(event)">
                </div>
            
                <!-- Zonas para colocar -->
                <div id="norte"  name="norte"  ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="centro" name="centro" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                <div id="sur"    name="sur"    ondrop="drop(event)" ondragover="allowDrop(event)"></div>

            </div>
        </div>
    
    </body>
</html>