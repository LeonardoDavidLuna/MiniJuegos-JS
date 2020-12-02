/**
* Función que se ejecuta al arrastrar el elemento. 
**/
function start(ev)
{
	e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
	e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
	e.target.style.opacity = '0.4'; 
}
/**
* Función que se ejecuta se termina de arrastrar el elemento. 
**/
function end(ev)
{
	e.target.style.opacity = ''; // Restaura la opacidad del elemento
	e.dataTransfer.clearData("Data");			
}


function allowDrop(ev) 
{
  ev.preventDefault();
}

function drag(ev) 
{
   ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) 
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    testing();
}


function opcion()
{
    //apunto a la opción
    var figura  = document.getElementById("figura");
    var bien    = document.getElementById("bien");
    var figuraA = document.getElementById("figura1");
    var figuraB = document.getElementById("figura2");
    var figuraC = document.getElementById("figura3");
    
    var categoria = document.getElementById("categoria");
    
    
    
    //Aleatoriamente elijo una figura
    var opcion = Math.floor(Math.random() * 3) + 0;
    //Color aleatorio de figura
    var rand1 = Math.floor(Math.random() * 6) + 0;
    var rand2 = Math.floor(Math.random() * 6) + 0;
    var rand3 = Math.floor(Math.random() * 6) + 0;
    
    //figura aleatoria
    var figA = Math.floor(Math.random() * 3) + 0;
    var figB = Math.floor(Math.random() * (4 - (3 - 1))) + 3;
    var figC = Math.floor(Math.random() * (6 - (5 - 1))) + 5;

    //0, 1, 2
    //3, 4
    //5, 6
    


    /*
    0 Circle
    1 diamond
    2 oval
    3 rectangle
    4 square
    5 star
    6 triangle
    */

    //Dependiendo de la figura, escribo la opción
    switch (opcion)
    {        
        case 0: 
                
                figuraA.setAttribute("name","bien");
                figuraA.setAttribute("src","figuras/fig"+figA+"/col"+rand1+".jpg");
                figuraB.setAttribute("src","figuras/fig"+figB+"/col"+rand2+".jpg");
                figuraC.setAttribute("src","figuras/fig"+figC+"/col"+rand3+".jpg");
            
                switch(figA)
                {
                    case 0: figura.innerHTML = "Circle";
                    break;
                    case 1: figura.innerHTML = "Diamond";
                    break;
                    case 2: figura.innerHTML = "Oval";
                    break;
                }
        break;
            
        case 1: 
                
                figuraB.setAttribute("name","bien");
                figuraA.setAttribute("src","figuras/fig"+figA+"/col"+rand1+".jpg");
                figuraB.setAttribute("src","figuras/fig"+figB+"/col"+rand2+".jpg");
                figuraC.setAttribute("src","figuras/fig"+figC+"/col"+rand3+".jpg");

                switch(figB)
                {
                    case 3: figura.innerHTML = "Rectangle";
                    break;
                    case 4: figura.innerHTML = "Square";
                    break;
                }
        break;
            
        case 2:
                
                figuraC.setAttribute("name","bien");
                figuraA.setAttribute("src","figuras/fig"+figA+"/col"+rand1+".jpg");
                figuraB.setAttribute("src","figuras/fig"+figB+"/col"+rand2+".jpg");
                figuraC.setAttribute("src","figuras/fig"+figC+"/col"+rand3+".jpg");

                switch(figC)
                {
                    case 5: figura.innerHTML = "Star";
                    break;
                    case 6: figura.innerHTML = "Triangle";
                    break;
                }
        break;
    }
    
    

    
    
}

function testing()
{ 
    var figuraA = document.getElementById("figura1");
    var figuraB = document.getElementById("figura2");
    var figuraC = document.getElementById("figura3");
  
    if(figuraA.getAttribute("name")==figuraA.parentNode.getAttribute("id")||
       figuraB.getAttribute("name")==figuraB.parentNode.getAttribute("id")||
       figuraC.getAttribute("name")==figuraC.parentNode.getAttribute("id"))
    {
        document.getElementById("resultado").innerHTML = "CORRECTO";
        
        
        window.setTimeout(next, 1000);
        
    }else
    {
        //document.getElementById("resultado").innerHTML = "INCOMPLETO";
        
    }
     
}
function next()
{
    location.href="3 Juego B3 (tamano).php";
}