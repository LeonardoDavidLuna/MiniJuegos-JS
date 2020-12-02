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
    var carpetas = [0,1,2,3,4,5,6,7,8];
    shuffle(carpetas);
    //Asignno un número aleatorio para entrar a la carpeta
    var A = carpetas[0];
    var B = carpetas[1];
    var C = carpetas[2];
    var D = carpetas[3];
    var E = carpetas[4];
    var F = carpetas[5];
    
    //apunto a la opción
    var caraA = document.getElementById("figura1");
    var caraB = document.getElementById("figura2");
    var caraC = document.getElementById("figura3");
    var caraD = document.getElementById("figura4");
    var caraE = document.getElementById("figura5");
    var caraF = document.getElementById("figura6");
    
    var palabra  = document.getElementById("palabra");
    var palabra2 = document.getElementById("palabra2");
    
    //Aleatoriamente elijo una expresión correcta
    var opcion = Math.floor(Math.random() * 3) + 0;

    /*
    Números de las carpetas
    0 Angry/Enojado
    1 Bored/Aburrido
    2 Desesperated/Desesperado
    3 Happy/Feliz
    4 Hopeful/Esperanzado
    5 Sad/Triste
    6 Scared/Asustado
    7 Sick/Enfermo
    8 Surprised/Sorprendido
    */
    
    //Dependiendo de la figura, escribo la opción
    //switch (0)
    switch (opcion)
    {        
        case 0: 
                caraA.setAttribute("name","bien");
                caraF.setAttribute("name","bien");
            
                caraA.setAttribute("src","archivos/faces/face"+A+"/face1.png");
                caraB.setAttribute("src","archivos/faces/face"+B+"/face0.png");
                caraC.setAttribute("src","archivos/faces/face"+C+"/face0.png");
                caraD.setAttribute("src","archivos/faces/face"+B+"/face1.png");
                caraE.setAttribute("src","archivos/faces/face"+C+"/face1.png");
                caraF.setAttribute("src","archivos/faces/face"+A+"/face0.png");
                
                switch(A)
                {
                    case 0:
                        palabra.innerHTML = "angry";
                        palabra2.innerHTML = "(enojado)";
                    break;
                    case 1:
                        palabra.innerHTML = "bored";
                        palabra2.innerHTML = "(aburrido)";
                    break;
                    case 2:
                        palabra.innerHTML = "desesperated";
                        palabra2.innerHTML = "(desesperado)";
                    break;
                    case 3:
                        palabra.innerHTML = "happy";
                        palabra2.innerHTML = "(feliz)";
                    break;
                    case 4:
                        palabra.innerHTML = "hopeful";
                        palabra2.innerHTML = "(esperanzado)";
                    break;
                    case 5:
                        palabra.innerHTML = "sad";
                        palabra2.innerHTML = "(triste)";
                    break;
                    case 6:
                        palabra.innerHTML = "scared";
                        palabra2.innerHTML = "(asustado)";
                    break;
                    case 7:
                        palabra.innerHTML = "sick";
                        palabra2.innerHTML = "(enfermo)";
                    break;
                    case 8:
                        palabra.innerHTML = "surprised";
                        palabra2.innerHTML = "(sorprendido)";
                    break;
                }
                
        break;        
        case 1: 
                caraB.setAttribute("name","bien");
                caraD.setAttribute("name","bien");
                
                caraA.setAttribute("src","archivos/faces/face"+A+"/face1.png");
                caraB.setAttribute("src","archivos/faces/face"+B+"/face0.png");
                caraC.setAttribute("src","archivos/faces/face"+C+"/face0.png");
                caraD.setAttribute("src","archivos/faces/face"+B+"/face1.png");
                caraE.setAttribute("src","archivos/faces/face"+C+"/face1.png");
                caraF.setAttribute("src","archivos/faces/face"+A+"/face0.png");
                            
                switch(B)
                {
                    case 0:
                        palabra.innerHTML = "angry";
                        palabra2.innerHTML = "(enojado)";
                    break;
                    case 1:
                        palabra.innerHTML = "bored";
                        palabra2.innerHTML = "(aburrido)";
                    break;
                    case 2:
                        palabra.innerHTML = "desesperated";
                        palabra2.innerHTML = "(desesperado)";
                    break;
                    case 3:
                        palabra.innerHTML = "happy";
                        palabra2.innerHTML = "(feliz)";
                    break;
                    case 4:
                        palabra.innerHTML = "hopeful";
                        palabra2.innerHTML = "(esperanzado)";
                    break;
                    case 5:
                        palabra.innerHTML = "sad";
                        palabra2.innerHTML = "(triste)";
                    break;
                    case 6:
                        palabra.innerHTML = "scared";
                        palabra2.innerHTML = "(asustado)";
                    break;
                    case 7:
                        palabra.innerHTML = "sick";
                        palabra2.innerHTML = "(enfermo)";
                    break;
                    case 8:
                        palabra.innerHTML = "surprised";
                        palabra2.innerHTML = "(sorprendido)";
                    break;
                }
            
        break;
        case 2: 
                caraC.setAttribute("name","bien");
                caraE.setAttribute("name","bien");
                
                caraA.setAttribute("src","archivos/faces/face"+A+"/face1.png");
                caraB.setAttribute("src","archivos/faces/face"+B+"/face0.png");
                caraC.setAttribute("src","archivos/faces/face"+C+"/face0.png");
                caraD.setAttribute("src","archivos/faces/face"+B+"/face1.png");
                caraE.setAttribute("src","archivos/faces/face"+C+"/face1.png");
                caraF.setAttribute("src","archivos/faces/face"+A+"/face0.png");
                
            
                switch(C)
                {
                    case 0:
                        palabra.innerHTML = "angry";
                        palabra2.innerHTML = "(enojado)";
                    break;
                    case 1:
                        palabra.innerHTML = "bored";
                        palabra2.innerHTML = "(aburrido)";
                    break;
                    case 2:
                        palabra.innerHTML = "desesperated";
                        palabra2.innerHTML = "(desesperado)";
                    break;
                    case 3:
                        palabra.innerHTML = "happy";
                        palabra2.innerHTML = "(feliz)";
                    break;
                    case 4:
                        palabra.innerHTML = "hopeful";
                        palabra2.innerHTML = "(esperanzado)";
                    break;
                    case 5:
                        palabra.innerHTML = "sad";
                        palabra2.innerHTML = "(triste)";
                    break;
                    case 6:
                        palabra.innerHTML = "scared";
                        palabra2.innerHTML = "(asustado)";
                    break;
                    case 7:
                        palabra.innerHTML = "sick";
                        palabra2.innerHTML = "(enfermo)";
                    break;
                    case 8:
                        palabra.innerHTML = "surprised";
                        palabra2.innerHTML = "(sorprendido)";
                    break;
                }
            
        break;
    }
}

//////////VALIDACIÓN
function testing()
{ 
    var caraA = document.getElementById("figura1");
    var caraB = document.getElementById("figura2");
    var caraC = document.getElementById("figura3");
    var caraD = document.getElementById("figura4");
    var caraE = document.getElementById("figura5");
    var caraF = document.getElementById("figura6");
    
    if(caraA.getAttribute("name")==caraA.parentNode.getAttribute("name") ||
       caraF.getAttribute("name")==caraF.parentNode.getAttribute("name") ||
       caraB.getAttribute("name")==caraB.parentNode.getAttribute("name") || caraD.getAttribute("name")==caraD.parentNode.getAttribute("name") ||
       caraC.getAttribute("name")==caraC.parentNode.getAttribute("name") || caraE.getAttribute("name")==caraE.parentNode.getAttribute("name"))
    {
        location.href="2 Good Job.php";
        
    }else
    {
        location.href="2 Great.php";   
    }   
}