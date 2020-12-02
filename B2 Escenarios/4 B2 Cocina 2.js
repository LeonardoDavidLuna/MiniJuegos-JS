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
    //apunto a la opción
    var objetoA = document.getElementById("arrastrable1");
    var objetoB = document.getElementById("arrastrable2");
    var objetoC = document.getElementById("arrastrable3");
    var objetoD = document.getElementById("arrastrable4");
    var objetoE = document.getElementById("arrastrable5");
    var objetoF = document.getElementById("arrastrable6");
    
    var palabra  = document.getElementById("resultado");
    var palabra2 = document.getElementById("resultado2");
    
    var imagenes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    //Desordeno el arreglo (Aleatorizo)
    shuffle(imagenes);
    
    //Asigno un número aleatorio de imagen
    var A = imagenes[0];
    var B = imagenes[1];
    var C = imagenes[2];
    var D = imagenes[3];
    var E = imagenes[4];
    
  /*Números de las carpetas
    0 Huevos
    1 Vaso
    2 Leche
    3 Manzana
    4 Microondas
    5 Naranja
    6 Olla
    7 Pan
    8 Pimienta
    9 Piña
    10 Plátano
    11 Queso
    12 Sal
    13 Sandía
    14 Taza
    15 Uvas*/
    
    n = Math.floor(Math.random() * 5) + 0;
    
    switch(n)
    {   //AAAAAAAAAAAAAAAAAAAAAA
        case 0:
            objetoA.setAttribute("name","bien");
            switch(A)
            {
            case 0:  palabra.innerHTML = "Put the Eggs";
                     palabra2.innerHTML = "Pon los Huevos";
            break;
            case 1:  palabra.innerHTML = "Put the Glass";
                     palabra2.innerHTML = "Pon el Vaso";
            break;
            case 2:  palabra.innerHTML = "Put the Milk";
                     palabra2.innerHTML = "Pon la Leche";
            break;
            case 3:  palabra.innerHTML = "Put the Apple";
                     palabra2.innerHTML = "Pon la Manzana";
            break;
            case 4:  palabra.innerHTML = "Put the Microwave Oven";
                     palabra2.innerHTML = "Pon el Microondas";
            break;
            case 5:  palabra.innerHTML = "Put the Orange";
                     palabra2.innerHTML = "Pon la Naranja";
            break;
            case 6:  palabra.innerHTML = "Put the Cooking Pot";
                     palabra2.innerHTML = "Pon la Olla";
            break;
            case 7:  palabra.innerHTML = "Put the Bread";
                     palabra2.innerHTML = "Pon el Pan";
            break;
            case 8:  palabra.innerHTML = "Put the Pepper";
                     palabra2.innerHTML = "Pon la Pimienta";
            break;
            case 9:  palabra.innerHTML = "Put the Pineapple";
                     palabra2.innerHTML = "Pon la Piña";
            break;
            case 10: palabra.innerHTML = "Put the Banana";
                     palabra2.innerHTML = "Pon el Plátano";
            break;
            case 11: palabra.innerHTML = "Put the Cheese";
                     palabra2.innerHTML = "Pon el Queso";
            break;
            case 12: palabra.innerHTML = "Put the Salt";
                     palabra2.innerHTML = "Pon la Sal";
            break;
            case 13: palabra.innerHTML = "Put the Watermelon";
                     palabra2.innerHTML = "Pon la Sandía";
            break;
            case 14: palabra.innerHTML = "Put the Cup";
                     palabra2.innerHTML = "Pon la Taza";
            break;
            case 15: palabra.innerHTML = "Put the Grapes";
                     palabra2.innerHTML = "Pon las Uvas";
            break;
            }
        break;
        //BBBBBBBBBBBBBBBBBBBBBB
        case 1:
            objetoB.setAttribute("name","bien");
            switch(B)
            {
            case 0:  palabra.innerHTML = "Put the Eggs";
                     palabra2.innerHTML = "Pon los Huevos";
            break;
            case 1:  palabra.innerHTML = "Put the Glass";
                     palabra2.innerHTML = "Pon el Vaso";
            break;
            case 2:  palabra.innerHTML = "Put the Milk";
                     palabra2.innerHTML = "Pon la Leche";
            break;
            case 3:  palabra.innerHTML = "Put the Apple";
                     palabra2.innerHTML = "Pon la Manzana";
            break;
            case 4:  palabra.innerHTML = "Put the Microwave Oven";
                     palabra2.innerHTML = "Pon el Microondas";
            break;
            case 5:  palabra.innerHTML = "Put the Orange";
                     palabra2.innerHTML = "Pon la Naranja";
            break;
            case 6:  palabra.innerHTML = "Put the Cooking Pot";
                     palabra2.innerHTML = "Pon la Olla";
            break;
            case 7:  palabra.innerHTML = "Put the Bread";
                     palabra2.innerHTML = "Pon el Pan";
            break;
            case 8:  palabra.innerHTML = "Put the Pepper";
                     palabra2.innerHTML = "Pon la Pimienta";
            break;
            case 9:  palabra.innerHTML = "Put the Pineapple";
                     palabra2.innerHTML = "Pon la Piña";
            break;
            case 10: palabra.innerHTML = "Put the Banana";
                     palabra2.innerHTML = "Pon el Plátano";
            break;
            case 11: palabra.innerHTML = "Put the Cheese";
                     palabra2.innerHTML = "Pon el Queso";
            break;
            case 12: palabra.innerHTML = "Put the Salt";
                     palabra2.innerHTML = "Pon la Sal";
            break;
            case 13: palabra.innerHTML = "Put the Watermelon";
                     palabra2.innerHTML = "Pon la Sandía";
            break;
            case 14: palabra.innerHTML = "Put the Cup";
                     palabra2.innerHTML = "Pon la Taza";
            break;
            case 15: palabra.innerHTML = "Put the Grapes";
                     palabra2.innerHTML = "Pon las Uvas";
            break;
            }
        break;
        //CCCCCCCCCCCCCCCCCCCCCC
        case 2: 
            objetoC.setAttribute("name","bien");
            switch(C)
            {
            case 0:  palabra.innerHTML = "Put the Eggs";
                     palabra2.innerHTML = "Pon los Huevos";
            break;
            case 1:  palabra.innerHTML = "Put the Glass";
                     palabra2.innerHTML = "Pon el Vaso";
            break;
            case 2:  palabra.innerHTML = "Put the Milk";
                     palabra2.innerHTML = "Pon la Leche";
            break;
            case 3:  palabra.innerHTML = "Put the Apple";
                     palabra2.innerHTML = "Pon la Manzana";
            break;
            case 4:  palabra.innerHTML = "Put the Microwave Oven";
                     palabra2.innerHTML = "Pon el Microondas";
            break;
            case 5:  palabra.innerHTML = "Put the Orange";
                     palabra2.innerHTML = "Pon la Naranja";
            break;
            case 6:  palabra.innerHTML = "Put the Cooking Pot";
                     palabra2.innerHTML = "Pon la Olla";
            break;
            case 7:  palabra.innerHTML = "Put the Bread";
                     palabra2.innerHTML = "Pon el Pan";
            break;
            case 8:  palabra.innerHTML = "Put the Pepper";
                     palabra2.innerHTML = "Pon la Pimienta";
            break;
            case 9:  palabra.innerHTML = "Put the Pineapple";
                     palabra2.innerHTML = "Pon la Piña";
            break;
            case 10: palabra.innerHTML = "Put the Banana";
                     palabra2.innerHTML = "Pon el Plátano";
            break;
            case 11: palabra.innerHTML = "Put the Cheese";
                     palabra2.innerHTML = "Pon el Queso";
            break;
            case 12: palabra.innerHTML = "Put the Salt";
                     palabra2.innerHTML = "Pon la Sal";
            break;
            case 13: palabra.innerHTML = "Put the Watermelon";
                     palabra2.innerHTML = "Pon la Sandía";
            break;
            case 14: palabra.innerHTML = "Put the Cup";
                     palabra2.innerHTML = "Pon la Taza";
            break;
            case 15: palabra.innerHTML = "Put the Grapes";
                     palabra2.innerHTML = "Pon las Uvas";
            break;
            }
        break;
        //DDDDDDDDDDDDDDDDDDDDDD
        case 3: 
            objetoD.setAttribute("name","bien");
            switch(D)
            {
            case 0:  palabra.innerHTML = "Put the Eggs";
                     palabra2.innerHTML = "Pon los Huevos";
            break;
            case 1:  palabra.innerHTML = "Put the Glass";
                     palabra2.innerHTML = "Pon el Vaso";
            break;
            case 2:  palabra.innerHTML = "Put the Milk";
                     palabra2.innerHTML = "Pon la Leche";
            break;
            case 3:  palabra.innerHTML = "Put the Apple";
                     palabra2.innerHTML = "Pon la Manzana";
            break;
            case 4:  palabra.innerHTML = "Put the Microwave Oven";
                     palabra2.innerHTML = "Pon el Microondas";
            break;
            case 5:  palabra.innerHTML = "Put the Orange";
                     palabra2.innerHTML = "Pon la Naranja";
            break;
            case 6:  palabra.innerHTML = "Put the Cooking Pot";
                     palabra2.innerHTML = "Pon la Olla";
            break;
            case 7:  palabra.innerHTML = "Put the Bread";
                     palabra2.innerHTML = "Pon el Pan";
            break;
            case 8:  palabra.innerHTML = "Put the Pepper";
                     palabra2.innerHTML = "Pon la Pimienta";
            break;
            case 9:  palabra.innerHTML = "Put the Pineapple";
                     palabra2.innerHTML = "Pon la Piña";
            break;
            case 10: palabra.innerHTML = "Put the Banana";
                     palabra2.innerHTML = "Pon el Plátano";
            break;
            case 11: palabra.innerHTML = "Put the Cheese";
                     palabra2.innerHTML = "Pon el Queso";
            break;
            case 12: palabra.innerHTML = "Put the Salt";
                     palabra2.innerHTML = "Pon la Sal";
            break;
            case 13: palabra.innerHTML = "Put the Watermelon";
                     palabra2.innerHTML = "Pon la Sandía";
            break;
            case 14: palabra.innerHTML = "Put the Cup";
                     palabra2.innerHTML = "Pon la Taza";
            break;
            case 15: palabra.innerHTML = "Put the Grapes";
                     palabra2.innerHTML = "Pon las Uvas";
            break;
            }
        break;
        //EEEEEEEEEEEEEEEEEEEEEE
        case 4: 
            objetoE.setAttribute("name","bien");
            switch(E)
            {
            case 0:  palabra.innerHTML = "Put the Eggs";
                     palabra2.innerHTML = "Pon los Huevos";
            break;
            case 1:  palabra.innerHTML = "Put the Glass";
                     palabra2.innerHTML = "Pon el Vaso";
            break;
            case 2:  palabra.innerHTML = "Put the Milk";
                     palabra2.innerHTML = "Pon la Leche";
            break;
            case 3:  palabra.innerHTML = "Put the Apple";
                     palabra2.innerHTML = "Pon la Manzana";
            break;
            case 4:  palabra.innerHTML = "Put the Microwave Oven";
                     palabra2.innerHTML = "Pon el Microondas";
            break;
            case 5:  palabra.innerHTML = "Put the Orange";
                     palabra2.innerHTML = "Pon la Naranja";
            break;
            case 6:  palabra.innerHTML = "Put the Cooking Pot";
                     palabra2.innerHTML = "Pon la Olla";
            break;
            case 7:  palabra.innerHTML = "Put the Bread";
                     palabra2.innerHTML = "Pon el Pan";
            break;
            case 8:  palabra.innerHTML = "Put the Pepper";
                     palabra2.innerHTML = "Pon la Pimienta";
            break;
            case 9:  palabra.innerHTML = "Put the Pineapple";
                     palabra2.innerHTML = "Pon la Piña";
            break;
            case 10: palabra.innerHTML = "Put the Banana";
                     palabra2.innerHTML = "Pon el Plátano";
            break;
            case 11: palabra.innerHTML = "Put the Cheese";
                     palabra2.innerHTML = "Pon el Queso";
            break;
            case 12: palabra.innerHTML = "Put the Salt";
                     palabra2.innerHTML = "Pon la Sal";
            break;
            case 13: palabra.innerHTML = "Put the Watermelon";
                     palabra2.innerHTML = "Pon la Sandía";
            break;
            case 14: palabra.innerHTML = "Put the Cup";
                     palabra2.innerHTML = "Pon la Taza";
            break;
            case 15: palabra.innerHTML = "Put the Grapes";
                     palabra2.innerHTML = "Pon las Uvas";
            break;
            }
        break;
        ///////////////////////////////////////
    }
    
    //Dependiendo de la figura, escribo la opción
    objetoA.setAttribute("src","Archivos/Objetos_cocina/Objetos/fig"+A+".png");
    objetoB.setAttribute("src","Archivos/Objetos_cocina/Objetos/fig"+B+".png");
    objetoC.setAttribute("src","Archivos/Objetos_cocina/Objetos/fig"+C+".png");
    objetoD.setAttribute("src","Archivos/Objetos_cocina/Objetos/fig"+D+".png");
    objetoE.setAttribute("src","Archivos/Objetos_cocina/Objetos/fig"+E+".png");
        
}

function testing()
{ 
    var objetoA = document.getElementById("arrastrable1");
    var objetoB = document.getElementById("arrastrable2");
    var objetoC = document.getElementById("arrastrable3");
    var objetoD = document.getElementById("arrastrable4");
    var objetoE = document.getElementById("arrastrable5");

    var palabra  = document.getElementById("resultado");
    var palabra2 = document.getElementById("resultado2");
        
    //Comparación de objetos
    if( objetoA.getAttribute("name")==objetoA.parentNode.getAttribute("name")||
        objetoB.getAttribute("name")==objetoB.parentNode.getAttribute("name")||
        objetoC.getAttribute("name")==objetoC.parentNode.getAttribute("name")||
        objetoD.getAttribute("name")==objetoD.parentNode.getAttribute("name")||
        objetoE.getAttribute("name")==objetoE.parentNode.getAttribute("name"))
        {
            palabra.innerHTML = "Good Job";
            palabra2.innerHTML = "¡Buen Trabajo!";
            
            //Recargo página y resto un intento
            window.setTimeout(reload, 1000);
        }else
        {        
            palabra.innerHTML = "Not that one";
            palabra2.innerHTML = "¡Ese no!";
            
            //Recargo página y resto un intento
            window.setTimeout(reload, 1000);
        }
}

function reload()
{
    location.reload();
}