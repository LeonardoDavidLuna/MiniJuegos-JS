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


// Función para desordenar arreglo
function shuffle(arr)
{
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};


function opcion()
{
    var carpetas = [0,1,2];
    shuffle(carpetas);
    
    //Asigno un número aleatorio para entrar a la carpeta
    var A = carpetas[0];
    var B = carpetas[1];
    var C = carpetas[2];
    
    //apunto a la opción
    var figuraA = document.getElementById("imagen1");
    var figuraB = document.getElementById("imagen2");
    var figuraC = document.getElementById("imagen3");
    

    //Figura aleatoria de animal o planta
    //var n = Math.floor(Math.random() * 5) + 0;
    var x, y, z;
    
            if(A==0 && B==1 && C==2)
            {
                figuraA.setAttribute("name","norte");
                figuraB.setAttribute("name","centro");
                figuraC.setAttribute("name","sur");
                
                x = Math.floor(Math.random() * 11) + 0;
                y = Math.floor(Math.random() * 8) + 0;
                z = Math.floor(Math.random() * 5) + 0;
                
            }
            if(A==0 && B==2 && C==1)
            {
                figuraA.setAttribute("name","norte");
                figuraB.setAttribute("name","sur");
                figuraC.setAttribute("name","centro");
                
                x = Math.floor(Math.random() * 11) + 0;
                y = Math.floor(Math.random() * 5) + 0;
                z = Math.floor(Math.random() * 8) + 0;
                
            }
            if(A==1 && B==0 && C==2)
            {
                figuraA.setAttribute("name","centro");
                figuraB.setAttribute("name","norte");
                figuraC.setAttribute("name","sur");
                
                x = Math.floor(Math.random() * 8) + 0;
                y = Math.floor(Math.random() * 11) + 0;
                z = Math.floor(Math.random() * 5) + 0;
            }
            if(A==1 && B==2 && C==0)
            {
                figuraA.setAttribute("name","centro");
                figuraB.setAttribute("name","sur");
                figuraC.setAttribute("name","norte");
                
                x = Math.floor(Math.random() * 8) + 0;
                y = Math.floor(Math.random() * 5) + 0;
                z = Math.floor(Math.random() * 11) + 0;
            }
            if(A==2 && B==0 && C==1)
            {
                figuraA.setAttribute("name","sur");
                figuraB.setAttribute("name","norte");
                figuraC.setAttribute("name","centro");
                
                x = Math.floor(Math.random() * 5) + 0;
                y = Math.floor(Math.random() * 11) + 0;
                z = Math.floor(Math.random() * 8) + 0;
            }
            if(A==2 && B==1 && C==0)
            {
                figuraA.setAttribute("name","sur");
                figuraB.setAttribute("name","centro");
                figuraC.setAttribute("name","norte");
                
                x = Math.floor(Math.random() * 5) + 0;
                y = Math.floor(Math.random() * 8) + 0;
                z = Math.floor(Math.random() * 11) + 0;
            }
    
    figuraA.setAttribute("src","Archivos/imagenes/carp"+A+"/fig"+x+".png");
    figuraB.setAttribute("src","Archivos/imagenes/carp"+B+"/fig"+y+".png");
    figuraC.setAttribute("src","Archivos/imagenes/carp"+C+"/fig"+z+".png");
    /*
    0 = norte
    1 = centro
    2 = sur
    
    0 1 2
    0 2 1
    1 0 2
    1 2 0
    2 0 1
    2 1 0
    */
}

//VALIDACIÓN//
function testing()
{
    var figuraA = document.getElementById("imagen1");
    var figuraB = document.getElementById("imagen2");
    var figuraC = document.getElementById("imagen3");
   
    if(figuraA.getAttribute("name")==figuraA.parentNode.getAttribute("name") &&
       figuraB.getAttribute("name")==figuraB.parentNode.getAttribute("name") &&
       figuraC.getAttribute("name")==figuraC.parentNode.getAttribute("name"))
    {
        location.href="3 B5 Finished.php";
        
    }else
    {
                
        //location.href="3 B5 Good.php";
    }    
}