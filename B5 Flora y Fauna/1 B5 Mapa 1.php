<html>
    <head>
        <title>Juego B5</title>    
            <link rel="stylesheet" href="1%20B5%20Mapa%201.css" type="text/css">
            <script src="1%20B5%20Mapa.js" type="text/javascript"></script>
    </head>

    <body>

       <div id="container">
            <div class="contInstruccion">
            <div><img src="archivos/otros/drag_hand1.png" id="instruccion"></div>
            <div id="instruccion">Click the figures to know some mexican animals and plants</div>
            </div>
        
            <div id="subcontainer">
                   <div id="cont-nina">
                       <img id="imagen" src="Archivos/Transparentes/nina_saludando.png">
                   </div>
                    <div id="dialogo-container">
                        <img id="imagen" src="Archivos/Transparentes/dialogo1.png">
                    </div>
                    <div id="english">
                      Hello! Let's  meet some Mexican animals and plants
                    </div>
                    <div id="spanish">
                      ¡Hola! Vamos a conocer algunos animales y plantas mexicanos
                    </div>
                                    
                    <div id="mapa-container">
                        <img id="imagen" src="Archivos/Transparentes/mapa_full.png">
                    </div>
                    <!-- Div's para obtener el Norte, Centro y Sur -->
                    <div id="norte"   onmouseenter="myMoveFunction()"></div>
                    <div id="centro"  onmouseover="myEnterFunction()"></div>
                    <div id="sur"     onmouseenter="myOverFunction()"></div>
                    <div id="sur2"    onmouseenter="myOverFunction()"></div>
                    <!-- ----------------------------------------- -->
                    <!-- Zona Norte  -->
                    <div id="magnolia"onclick="objetos()"></div>
                    <div id="coyote"  onclick="objetos()"></div>
                    <div id="cactus"  onclick="objetos()"></div>
                    <div id="ballena" onclick="objetos()"></div>
                    <div id="peyote"  onclick="objetos()"></div>
                    <div id="maguey"  onclick="objetos()"></div>
                    <div id="aguila"  onclick="objetos()"></div>
                    <div id="girasol" onclick="objetos()"></div>
                    <div id="cactus2" onclick="objetos()"></div>
                    <div id="palmera" onclick="objetos()"></div>
                    <div id="pino"    onclick="objetos()"></div>
                    <!-- --------- -->
                    
                    <!-- Zona Centro -->
                    <div id="zenzontle"     onclick="objetos()"></div>
                    <div id="xolos"         onclick="objetos()"></div>
                    <div id="nochebuena"    onclick="objetos()"></div>
                    <div id="tecolote"      onclick="objetos()"></div>
                    <div id="mariposa"      onclick="objetos()"></div>
                    <div id="nopal"         onclick="objetos()"></div>
                    <div id="cosmos"        onclick="objetos()"></div>
                    <div id="ajolote"       onclick="objetos()"></div>
                    <!-- --------- -->
                    
                    <!-- Zona Sur    -->
                    <div id="mapache"       onclick="objetos()"></div>
                    <div id="cempasuchil"   onclick="objetos()"></div>
                    <div id="cacomiztle"    onclick="objetos()"></div>
                    <div id="guacamaya"     onclick="objetos()"></div>
                    <div id="ocelote"       onclick="objetos()"></div>
                    <!-- --------- -->
                
                    <div id="container-estrella">
                        <img id="imagen" src="Archivos/Transparentes/puntos_cardinales.png">
                    </div>
                    
                    <div id="boton" onClick="location='2 B5 Mapa 2.php'">START</div>
            </div>
       </div>       
        
    </body>
</html>