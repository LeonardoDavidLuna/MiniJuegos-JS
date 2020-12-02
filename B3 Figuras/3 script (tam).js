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
    var figuraA = document.getElementById("figura1");
    var figuraB = document.getElementById("figura2");
    var figuraC = document.getElementById("figura3");
    
    //var contenedor = document.getElementsByClassName("padre");
    
    
    var figuraN = document.getElementById("figura");

    //Figura aleatoria de animal o planta
    //var n = Math.floor(Math.random() * 5) + 0;
    var x, y, z;
    
    x = Math.floor(Math.random() * 35) + 0;
    y = Math.floor(Math.random() * 35) + 0;
    z = Math.floor(Math.random() * 35) + 0;
    
    n = Math.floor(Math.random() * 3) + 0;
    
    //A=0 BIG
    //B=1 MEDIUM
    //C=2 SMALL
    
    /*
    0 1 2
    0 2 1
    
    1 0 2
    2 0 1
    
    1 2 0
    2 1 0
    */
    switch(n)
    {
        case 0:
            if(A==0 && B==1 && C==2)
            {
                figuraN.innerHTML = "Big";
                
                figuraA.setAttribute("name","bien");
                figuraB.style.width="70px";
                figuraC.style.width="40px";
            }
            if(A==0 && B==2 && C==1)
            {
                figuraN.innerHTML = "Big";
                
                figuraA.setAttribute("name","bien");
                figuraB.style.width="40px";
                figuraC.style.width="70px";
            }
            if(A==1 && B==0 && C==2)
            {
                figuraN.innerHTML = "Big";
                
                figuraA.style.width="40px";
                figuraB.setAttribute("name","bien");
                figuraC.style.width="70px";

            }
            if(A==1 && B==2 && C==0)
            {
                figuraN.innerHTML = "Big";
                
                figuraC.style.width="40px";
                figuraB.setAttribute("name","bien");
                figuraA.style.width="70px";
            }
            if(A==2 && B==0 && C==1)
            {
                figuraN.innerHTML = "Big";
                
                figuraA.style.width="40px";
                figuraB.style.width="70px";
                figuraC.setAttribute("name","bien");
            }
            if(A==2 && B==1 && C==0)
            {
                figuraN.innerHTML = "Big";
                
                figuraB.style.width="40px";
                figuraA.style.width="70px";
                figuraC.setAttribute("name","bien");
            }
        break;
            
        case 1:
            if(A==0 && B==1 && C==2)
            {
                figuraN.innerHTML = "Small";
                
                figuraC.setAttribute("name","bien");
                figuraB.style.width="70px";
                figuraC.style.width="40px";
            }
            if(A==0 && B==2 && C==1)
            {
                figuraN.innerHTML = "Small";
                
                figuraB.setAttribute("name","bien");
                figuraB.style.width="40px";
                figuraC.style.width="70px";
            }
            if(A==1 && B==0 && C==2)
            {
                figuraN.innerHTML = "Small"; 
                
                figuraA.style.width="40px";
                figuraA.setAttribute("name","bien");
                figuraC.style.width="70px";

            }
            if(A==1 && B==2 && C==0)
            {
                figuraN.innerHTML = "Small";
                
                figuraC.style.width="40px";
                figuraC.setAttribute("name","bien");
                figuraA.style.width="70px";
            }
            if(A==2 && B==0 && C==1)
            {
                figuraN.innerHTML = "Small";
                
                figuraA.style.width="40px";
                figuraB.style.width="70px";
                figuraA.setAttribute("name","bien");
            }
            if(A==2 && B==1 && C==0)
            {
                figuraN.innerHTML = "Small";
                
                figuraB.style.width="40px";
                figuraA.style.width="70px";
                figuraB.setAttribute("name","bien");
            }
        break;
            
        case 2:
            if(A==0 && B==1 && C==2)
            {
                figuraN.innerHTML = "Medium";
                
                figuraB.setAttribute("name","bien");
                figuraB.style.width="70px";
                figuraC.style.width="40px";
            }
            if(A==0 && B==2 && C==1)
            {
                figuraN.innerHTML = "Medium";
                
                figuraC.setAttribute("name","bien");
                figuraB.style.width="40px";
                figuraC.style.width="70px";
            }
            if(A==1 && B==0 && C==2)
            {
                figuraN.innerHTML = "Medium";
                
                figuraA.style.width="40px";
                figuraC.setAttribute("name","bien");
                figuraC.style.width="70px";

            }
            if(A==1 && B==2 && C==0)
            {
                figuraN.innerHTML = "Medium";
                
                figuraC.style.width="40px";
                figuraA.setAttribute("name","bien");
                figuraA.style.width="70px";
            }
            if(A==2 && B==0 && C==1)
            {
                figuraN.innerHTML = "Medium";
                
                figuraA.style.width="40px";
                figuraB.style.width="70px";
                figuraB.setAttribute("name","bien");
            }
            if(A==2 && B==1 && C==0)
            {
                figuraN.innerHTML = "Medium";
                
                figuraB.style.width="40px";
                figuraA.style.width="70px";
                figuraA.setAttribute("name","bien");
            }
            
        break;
    }
    
    figuraA.setAttribute("src","tamano/fig"+x+".jpg");
    figuraB.setAttribute("src","tamano/fig"+y+".jpg");
    figuraC.setAttribute("src","tamano/fig"+z+".jpg");
    
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
    //Completar a donde se quiera seguir
    location.href="";
}