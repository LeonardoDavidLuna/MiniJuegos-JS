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
    var figA = Math.floor(Math.random() * 2) + 0;
    var figB = Math.floor(Math.random() * (3 - (2 - 1))) + 2;
    var figC = Math.floor(Math.random() * (5 - (4 - 1))) + 4;

    //0, 1, 2
    //3, 4
    //5, 6
    


    /*
    0 Blue
    1 Green
    2 Orange
    3 Purple
    4 Red
    5 Yellow
    */

    //Dependiendo de la figura, escribo la opción
    switch (opcion)
    {        
        case 0: 
                
                figuraA.setAttribute("name","bien");
                figuraA.setAttribute("src","color/col"+figA+"/fig"+rand1+".jpg");
                figuraB.setAttribute("src","color/col"+figB+"/fig"+rand2+".jpg");
                figuraC.setAttribute("src","color/col"+figC+"/fig"+rand3+".jpg");
            
                switch(figA)
                {
                    case 0: figura.innerHTML = "Blue";
                    break;
                    case 1: figura.innerHTML = "Green";
                    break;
                }
        break;
            
        case 1: 
                
                figuraB.setAttribute("name","bien");
                figuraA.setAttribute("src","color/col"+figA+"/fig"+rand1+".jpg");
                figuraB.setAttribute("src","color/col"+figB+"/fig"+rand2+".jpg");
                figuraC.setAttribute("src","color/col"+figC+"/fig"+rand3+".jpg");

                switch(figB)
                {
                    case 2: figura.innerHTML = "Orange";
                    break;
                    case 3: figura.innerHTML = "Purple";
                    break;
                }
        break;
            
        case 2:
                
                figuraC.setAttribute("name","bien");
                figuraA.setAttribute("src","color/col"+figA+"/fig"+rand1+".jpg");
                figuraB.setAttribute("src","color/col"+figB+"/fig"+rand2+".jpg");
                figuraC.setAttribute("src","color/col"+figC+"/fig"+rand3+".jpg");

                switch(figC)
                {
                    case 4: figura.innerHTML = "Red";
                    break;
                    case 5: figura.innerHTML = "Yellow";
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
        
        window.setTimeout(next,1000);
    }else
    {
        //document.getElementById("resultado").innerHTML = "INCOMPLETO";
        
    }
       
}

function next()
{
    location.href="2 Juego B3 (figuras).php";
}