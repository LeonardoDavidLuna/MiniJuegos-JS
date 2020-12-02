<html>
<head>
    <meta charset="utf-8">
    <title>Juego B3</title>
    <link rel="stylesheet" href="style-B3.css" type="text/css">
    <script src="2%20script%20(figuras).js" type="text/javascript"></script>    
</head>

<body onload="opcion()"> 
 
<div id="container">
 <div class="contInstruccion">
        <div><img src="complementos/drag_hand1.png" id="instruccion"></div>
        <div id="instruccion">Drag and drop the correct figure</div>
 </div>
  
<section id="subcontainer" ondrop="drop(event)" ondragover="allowDrop(event)"> 
  <div class="letreroA">The Green Store</div>
  <div class="letreroB" id="figura"> </div>
   
  <div class="padre" id="bien"  ondrop="drop(event)" ondragover="allowDrop(event)"></div>
  <div><img src="complementos/contenedor.jpg"></div>
  
  <img class="figura" id="figura1" name="mal"    draggable="true" ondragstart="drag(event)"/>
  <img class="figura" id="figura2" name="mal"    draggable="true" ondragstart="drag(event)"/>
  <img class="figura" id="figura3" name="mal"    draggable="true" ondragstart="drag(event)"/>
  
</section>
    <div id="resultado"></div>
</div>

</body>
</html>