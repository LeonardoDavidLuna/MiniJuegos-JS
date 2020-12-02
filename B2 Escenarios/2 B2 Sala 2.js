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
    var objeto1 = document.getElementById("fig1");
    var objeto2 = document.getElementById("fig2");
    var objeto3 = document.getElementById("fig3");
    var objeto4 = document.getElementById("fig4");
    var objeto5 = document.getElementById("fig5");
    var objeto6 = document.getElementById("fig6");

    var instruccion = document.getElementById("resultado");
    
    
    var imagenes = [0,1,2,3,4,5];
    shuffle(imagenes);
    
    var A = imagenes[0];
    var B = imagenes[1];
    var C = imagenes[2];
    var D = imagenes[3];
    var E = imagenes[4];
    var F = imagenes[5];
    
    /*
    0: television
    1: lampara
    2: florero
    3: cojinL
    4: cuadro
    5: cojinR
    */
    
    objeto1.setAttribute("src","Archivos/Sala-objetos/transparentes/fig"+A+".png");
    objeto2.setAttribute("src","Archivos/Sala-objetos/transparentes/fig"+B+".png");
    objeto3.setAttribute("src","Archivos/Sala-objetos/transparentes/fig"+C+".png");
    objeto4.setAttribute("src","Archivos/Sala-objetos/transparentes/fig"+D+".png");
    objeto5.setAttribute("src","Archivos/Sala-objetos/transparentes/fig"+E+".png");
    objeto6.setAttribute("src","Archivos/Sala-objetos/transparentes/fig"+F+".png");
    
    switch(A)
    {
        case 0: objeto1.setAttribute("name","television");
        break;
        case 1: objeto1.setAttribute("name","lampara");
        break;
        case 2: objeto1.setAttribute("name","florero");
        break;
        case 3: objeto1.setAttribute("name","cojinL");
        break;
        case 4: objeto1.setAttribute("name","cuadro");
        break;
        case 5: objeto1.setAttribute("name","cojinR");
        break;
    }
    switch(B)
    {
        case 0: objeto2.setAttribute("name","television");
        break;
        case 1: objeto2.setAttribute("name","lampara");
        break;
        case 2: objeto2.setAttribute("name","florero");
        break;
        case 3: objeto2.setAttribute("name","cojinL");
        break;
        case 4: objeto2.setAttribute("name","cuadro");
        break;
        case 5: objeto2.setAttribute("name","cojinR");
        break;
    }
    switch(C)
    {
        case 0: objeto3.setAttribute("name","television");
        break;
        case 1: objeto3.setAttribute("name","lampara");
        break;
        case 2: objeto3.setAttribute("name","florero");
        break;
        case 3: objeto3.setAttribute("name","cojinL");
        break;
        case 4: objeto3.setAttribute("name","cuadro");
        break;
        case 5: objeto3.setAttribute("name","cojinR");
        break;
    }
    switch(D)
    {
        case 0: objeto4.setAttribute("name","television");
        break;
        case 1: objeto4.setAttribute("name","lampara");
        break;
        case 2: objeto4.setAttribute("name","florero");
        break;
        case 3: objeto4.setAttribute("name","cojinL");
        break;
        case 4: objeto4.setAttribute("name","cuadro");
        break;
        case 5: objeto4.setAttribute("name","cojinR");
        break;
    }
    switch(E)
    {
        case 0: objeto5.setAttribute("name","television");
        break;
        case 1: objeto5.setAttribute("name","lampara");
        break;
        case 2: objeto5.setAttribute("name","florero");
        break;
        case 3: objeto5.setAttribute("name","cojinL");
        break;
        case 4: objeto5.setAttribute("name","cuadro");
        break;
        case 5: objeto5.setAttribute("name","cojinR");
        break;
    }
    switch(F)
    {
        case 0: objeto6.setAttribute("name","television");
        break;
        case 1: objeto6.setAttribute("name","lampara");
        break;
        case 2: objeto6.setAttribute("name","florero");
        break;
        case 3: objeto6.setAttribute("name","cojinL");
        break;
        case 4: objeto6.setAttribute("name","cuadro");
        break;
        case 5: objeto6.setAttribute("name","cojinR");
        break;
    }
}

/////////VALIDACIÓN////////
function testing()
{
    //var instruccion = document.getElementById("instruccion");
    var boton       = document.getElementById("boton");
    var respuesta= document.getElementById("resultado");
    
    //Imágenes a arrastrar
    var tele    = document.getElementById("fig1");
    var cuadro  = document.getElementById("fig2");
    var lampara = document.getElementById("fig3");
    var florero = document.getElementById("fig4");
    var cojinL  = document.getElementById("fig5");
    var cojinR  = document.getElementById("fig6");
    
    if(tele.getAttribute("name")   == tele.parentNode.getAttribute("name")&&
       cuadro.getAttribute("name") == cuadro.parentNode.getAttribute("name")&&
       lampara.getAttribute("name")== lampara.parentNode.getAttribute("name")&&
       florero.getAttribute("name")== florero.parentNode.getAttribute("name")&&
       cojinL.getAttribute("name") == cojinL.parentNode.getAttribute("name")&&
       cojinR.getAttribute("name") == cojinR.parentNode.getAttribute("name"))
    {
        
        respuesta.innerHTML="Finished";
        boton.style.display='block';
    }else
    {
        respuesta.innerHTML="Drag and fill in the blanks";
        boton.style.display='none';
    }
    
}