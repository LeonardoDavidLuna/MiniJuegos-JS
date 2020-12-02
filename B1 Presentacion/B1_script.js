function start(ev)
{
	e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
	e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
	e.target.style.opacity = '0.4'; 
}

//Función que se ejecuta se termina de arrastrar el elemento. 
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
//Palabra 1 HAVE A NICE DAY!
function aleatorio1()
{
    
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    palabra4 = document.getElementById("4");
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");
    palabra7 = document.getElementById("7");
    palabra8 = document.getElementById("8");
    palabra9 = document.getElementById("9");
    palabra10 = document.getElementById("10");
    palabra11 = document.getElementById("11");
    palabra12 = document.getElementById("12");
    palabra13 = document.getElementById("13");
    palabra14 = document.getElementById("14");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(3-0+1)+0);
    rand2 = Math.floor(Math.random()*(10-7+1)+7);
    rand3 = Math.floor(Math.random()*(14-12+1)+12);
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="H";
                letra2.setAttribute("name","H");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="a";
                letra2.setAttribute("name","a");
        break;
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra2.innerHTML="v";
                letra2.setAttribute("name","v");
        break;
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra2.innerHTML="e";
                letra2.setAttribute("name","e");
        break;
        }
        switch(rand2)
        {
        case 7: palabra7.setAttribute("class","Casilla");
                palabra7.innerHTML="";
                letra1.innerHTML="n";
                letra1.setAttribute("name","n");
        break;
        case 8: palabra8.setAttribute("class","Casilla");
                palabra8.innerHTML="";
                letra1.innerHTML="i";
                letra1.setAttribute("name","i");
        break;
        case 9: palabra9.setAttribute("class","Casilla");
                palabra9.innerHTML="";
                letra1.innerHTML="c";
                letra1.setAttribute("name","c");
        break;
        case 10: palabra10.setAttribute("class","Casilla");
                 palabra10.innerHTML="";
                 letra1.innerHTML="e";
                 letra1.setAttribute("name","e");
        break;
        }
        switch(rand3)
        {
        case 12: palabra12.setAttribute("class","Casilla");
                 palabra12.innerHTML="";
                 letra3.innerHTML="d";
                 letra3.setAttribute("name","d");
        break;
        case 13: palabra13.setAttribute("class","Casilla");
                 palabra13.innerHTML="";
                 letra3.innerHTML="a";
                 letra3.setAttribute("name","a");
        break;
        case 14: palabra14.setAttribute("class","Casilla");
                 palabra14.innerHTML="";
                 letra3.innerHTML="y";
                 letra3.setAttribute("name","y");
        break;
        }
    
}

///////////////Palabra 2 SO LONG!
function aleatorio2()
{
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    palabra4 = document.getElementById("4");
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");
    palabra7 = document.getElementById("7");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(3-0+1)+0);
    rand2 = Math.floor(Math.random()*(10-7+1)+7);
    rand3 = Math.floor(Math.random()*(14-12+1)+12);
        
    
        rand1 = Math.floor(Math.random()*(1-0+1)+0);
        rand2 = Math.floor(Math.random()*(4-3+1)+3);
        rand3 = Math.floor(Math.random()*(6-5+1)+5);
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="S";
                letra2.setAttribute("name","S");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="o";
                letra2.setAttribute("name","o");
        break;
        
    }
        /////////////////////////////////////////////////////////////////
        switch(rand2)
        {
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra1.innerHTML="l";
                letra1.setAttribute("name","l");
        break;
        case 4: palabra4.setAttribute("class","Casilla");
                palabra4.innerHTML="";
                letra1.innerHTML="o";
                letra1.setAttribute("name","o");
        break;
        }
        /////////////////////////////////////////////////////////////////
        switch(rand3)
        {
        case 5: palabra5.setAttribute("class","Casilla");
                 palabra5.innerHTML="";
                 letra3.innerHTML="n";
                 letra3.setAttribute("name","n");
        break;
        case 6: palabra6.setAttribute("class","Casilla");
                 palabra6.innerHTML="";
                 letra3.innerHTML="g";
                 letra3.setAttribute("name","g");
        break;
        }
}

///////////////Palabra 3 THANK YOU!
function aleatorio3()
{
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    palabra4 = document.getElementById("4");
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");
    palabra7 = document.getElementById("7");
    palabra8 = document.getElementById("8");
    palabra9 = document.getElementById("9");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
        rand1 = Math.floor(Math.random()*(2-0+1)+0);
        rand2 = Math.floor(Math.random()*(4-3+1)+3);
        rand3 = Math.floor(Math.random()*(8-6+1)+6);
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="T";
                letra2.setAttribute("name","T");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="h";
                letra2.setAttribute("name","h");
        break;
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra2.innerHTML="a";
                letra2.setAttribute("name","a");
        break;
        
        }
        /////////////////////////////////////////////////////////////////
        switch(rand2)
        {
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra1.innerHTML="n";
                letra1.setAttribute("name","n");
        break;
        case 4: palabra4.setAttribute("class","Casilla");
                palabra4.innerHTML="";
                letra1.innerHTML="k";
                letra1.setAttribute("name","k");
        break;
        }
        /////////////////////////////////////////////////////////////////
        switch(rand3)
        {
        case 6: palabra6.setAttribute("class","Casilla");
                palabra6.innerHTML="";
                letra3.innerHTML="y";
                letra3.setAttribute("name","y");
        break;
        case 7: palabra7.setAttribute("class","Casilla");
                palabra7.innerHTML="";
                letra3.innerHTML="o";
                letra3.setAttribute("name","o");
        break;
        case 8: palabra8.setAttribute("class","Casilla");
                palabra8.innerHTML="";
                letra3.innerHTML="u";
                letra3.setAttribute("name","u");
        break;
        }
}


//////////Palabra 4 YOU ARE WELCOME
function aleatorio4()
{
    
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    
    palabra4 = document.getElementById("4");
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");

    palabra8 = document.getElementById("8");
    palabra9 = document.getElementById("9");
    palabra10 = document.getElementById("10");
    palabra11 = document.getElementById("11");
    palabra12 = document.getElementById("12");
    palabra13 = document.getElementById("13");
    palabra14 = document.getElementById("14");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(2-0+1)+0);
    rand2 = Math.floor(Math.random()*(6-4+1)+4);
    rand3 = Math.floor(Math.random()*(14-8+1)+8);
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="Y";
                letra2.setAttribute("name","Y");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="o";
                letra2.setAttribute("name","o");
        break;
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra2.innerHTML="u";
                letra2.setAttribute("name","u");
        break;
        }
        switch(rand2)
        {
        case 4: palabra4.setAttribute("class","Casilla");
                palabra4.innerHTML="";
                letra1.innerHTML="a";
                letra1.setAttribute("name","a");
        break;
        case 5: palabra5.setAttribute("class","Casilla");
                palabra5.innerHTML="";
                letra1.innerHTML="r";
                letra1.setAttribute("name","r");
        break;
        case 6: palabra6.setAttribute("class","Casilla");
                palabra6.innerHTML="";
                letra1.innerHTML="e";
                letra1.setAttribute("name","e");
        break;
        
        }
        switch(rand3)
        {
        case 8:  palabra8.setAttribute("class","Casilla");
                 palabra8.innerHTML="";
                 letra3.innerHTML="w";
                 letra3.setAttribute("name","w");
        break;
        case 9:  palabra9.setAttribute("class","Casilla");
                 palabra9.innerHTML="";
                 letra3.innerHTML="e";
                 letra3.setAttribute("name","e");
        break;
        case 10: palabra10.setAttribute("class","Casilla");
                 palabra10.innerHTML="";
                 letra3.innerHTML="l";
                 letra3.setAttribute("name","l");
        break;
        case 11: palabra11.setAttribute("class","Casilla");
                 palabra11.innerHTML="";
                 letra3.innerHTML="c";
                 letra3.setAttribute("name","c");
        break;
        case 12: palabra12.setAttribute("class","Casilla");
                 palabra12.innerHTML="";
                 letra3.innerHTML="o";
                 letra3.setAttribute("name","o");
        break;
        case 13: palabra13.setAttribute("class","Casilla");
                 palabra13.innerHTML="";
                 letra3.innerHTML="m";
                 letra3.setAttribute("name","m");
        break;
        case 14: palabra14.setAttribute("class","Casilla");
                 palabra14.innerHTML="";
                 letra3.innerHTML="e";
                 letra3.setAttribute("name","e");
        break;
        }
    
}

///////////////Palabra 5 EXCUSE ME
function aleatorio5()
{
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    palabra4 = document.getElementById("4");
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");
    palabra7 = document.getElementById("7");
    palabra8 = document.getElementById("8");
    palabra9 = document.getElementById("9");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(2-0+1)+0);
    rand2 = Math.floor(Math.random()*(5-3+1)+3);
    rand3 = Math.floor(Math.random()*(8-7+1)+7);
        
    
        
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="E";
                letra2.setAttribute("name","E");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="x";
                letra2.setAttribute("name","x");
        break;
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra2.innerHTML="c";
                letra2.setAttribute("name","c");
        break;
        
    }
        /////////////////////////////////////////////////////////////////
        switch(rand2)
        {
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra1.innerHTML="u";
                letra1.setAttribute("name","u");
        break;
        case 4: palabra4.setAttribute("class","Casilla");
                palabra4.innerHTML="";
                letra1.innerHTML="s";
                letra1.setAttribute("name","s");
        break;
        case 5: palabra5.setAttribute("class","Casilla");
                palabra5.innerHTML="";
                letra1.innerHTML="e";
                letra1.setAttribute("name","e");
        break;
        }
        /////////////////////////////////////////////////////////////////
        switch(rand3)
        {
        case 7:  palabra7.setAttribute("class","Casilla");
                 palabra7.innerHTML="";
                 letra3.innerHTML="m";
                 letra3.setAttribute("name","m");
        break;
        case 8:  palabra8.setAttribute("class","Casilla");
                 palabra8.innerHTML="";
                 letra3.innerHTML="e";
                 letra3.setAttribute("name","e");
        break;
        }
}


//////////Palabra 6 I AM SORRY
function aleatorio6()
{
    
    
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");
    palabra7 = document.getElementById("7");
    palabra8 = document.getElementById("8");
    palabra9 = document.getElementById("9");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(3-2+1)+2);
    rand2 = Math.floor(Math.random()*(7-5+1)+5);
    rand3 = Math.floor(Math.random()*(9-8+1)+8);
        
        switch(rand1)
        {
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra2.innerHTML="a";
                letra2.setAttribute("name","a");
        break;
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra2.innerHTML="m";
                letra2.setAttribute("name","m");
        break;
        }
        switch(rand2)
        {
        
        case 5: palabra5.setAttribute("class","Casilla");
                palabra5.innerHTML="";
                letra1.innerHTML="s";
                letra1.setAttribute("name","s");
        break;
        case 6: palabra6.setAttribute("class","Casilla");
                palabra6.innerHTML="";
                letra1.innerHTML="o";
                letra1.setAttribute("name","o");
        break;
        case 7: palabra7.setAttribute("class","Casilla");
                palabra7.innerHTML="";
                letra1.innerHTML="r";
                letra1.setAttribute("name","r");
        break;
        
        }
        switch(rand3)
        {
        case 8:  palabra8.setAttribute("class","Casilla");
                 palabra8.innerHTML="";
                 letra3.innerHTML="r";
                 letra3.setAttribute("name","r");
        break;
        case 9:  palabra9.setAttribute("class","Casilla");
                 palabra9.innerHTML="";
                 letra3.innerHTML="y";
                 letra3.setAttribute("name","y");
        break;
        }
    
}


//////////Palabra 7 PLEASE, HELP ME!
function aleatorio7()
{
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    palabra4 = document.getElementById("4");
    palabra5 = document.getElementById("5");
    
    palabra8 = document.getElementById("8");
    palabra9 = document.getElementById("9");
    palabra10 = document.getElementById("10");
    palabra11 = document.getElementById("11");
    
    palabra13 = document.getElementById("13");
    palabra14 = document.getElementById("14");
    palabra15 = document.getElementById("15");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(5-0+1)+0);
    rand2 = Math.floor(Math.random()*(11-8+1)+8);
    rand3 = Math.floor(Math.random()*(14-13+1)+13);
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="P";
                letra2.setAttribute("name","P");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="l";
                letra2.setAttribute("name","l");
        break;
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra2.innerHTML="e";
                letra2.setAttribute("name","e");
        break;
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra2.innerHTML="a";
                letra2.setAttribute("name","a");
        break;
        case 4: palabra4.setAttribute("class","Casilla");
                palabra4.innerHTML="";
                letra2.innerHTML="s";
                letra2.setAttribute("name","s");
        break;
        case 5: palabra5.setAttribute("class","Casilla");
                palabra5.innerHTML="";
                letra2.innerHTML="e";
                letra2.setAttribute("name","e");
        break;
        
        }
        switch(rand2)
        {
        
        case 8: palabra8.setAttribute("class","Casilla");
                palabra8.innerHTML="";
                letra1.innerHTML="h";
                letra1.setAttribute("name","h");
        break;
        case 9: palabra9.setAttribute("class","Casilla");
                palabra9.innerHTML="";
                letra1.innerHTML="e";
                letra1.setAttribute("name","e");
        break;
        case 10: palabra10.setAttribute("class","Casilla");
                 palabra10.innerHTML="";
                 letra1.innerHTML="l";
                 letra1.setAttribute("name","l");
        break;
        case 11: palabra11.setAttribute("class","Casilla");
                 palabra11.innerHTML="";
                 letra1.innerHTML="p";
                 letra1.setAttribute("name","p");
        break;
        
        }
        switch(rand3)
        {
        case 13: palabra13.setAttribute("class","Casilla");
                 palabra13.innerHTML="";
                 letra3.innerHTML="m";
                 letra3.setAttribute("name","m");
        break;
        case 14: palabra14.setAttribute("class","Casilla");
                 palabra14.innerHTML="";
                 letra3.innerHTML="e";
                 letra3.setAttribute("name","e");
        break;
        }
    
}

//////////Palabra 8 Good afternoon!
function aleatorio8()
{
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");
    palabra7 = document.getElementById("7");
    palabra8 = document.getElementById("8");
    palabra9 = document.getElementById("9");
    palabra10 = document.getElementById("10");
    palabra11 = document.getElementById("11");
    palabra12 = document.getElementById("12");
    palabra13 = document.getElementById("13");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(3-0+1)+0);
    rand2 = Math.floor(Math.random()*(8-5+1)+5);
    rand3 = Math.floor(Math.random()*(13-9+1)+9);
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="G";
                letra2.setAttribute("name","G");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="o";
                letra2.setAttribute("name","o");
        break;
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra2.innerHTML="o";
                letra2.setAttribute("name","o");
        break;
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra2.innerHTML="d";
                letra2.setAttribute("name","d");
        break;
        
        }
        switch(rand2)
        {
        
        case 5: palabra5.setAttribute("class","Casilla");
                palabra5.innerHTML="";
                letra1.innerHTML="a";
                letra1.setAttribute("name","a");
        break;
        case 6: palabra6.setAttribute("class","Casilla");
                palabra6.innerHTML="";
                letra1.innerHTML="f";
                letra1.setAttribute("name","f");
        break;
        case 7: palabra7.setAttribute("class","Casilla");
                 palabra7.innerHTML="";
                 letra1.innerHTML="t";
                 letra1.setAttribute("name","t");
        break;
        case 8: palabra8.setAttribute("class","Casilla");
                 palabra8.innerHTML="";
                 letra1.innerHTML="e";
                 letra1.setAttribute("name","e");
        break;
        }
        switch(rand3)
        {
        case 9: palabra9.setAttribute("class","Casilla");
                 palabra9.innerHTML="";
                 letra3.innerHTML="r";
                 letra3.setAttribute("name","r");
        break;
        case 10: palabra10.setAttribute("class","Casilla");
                 palabra10.innerHTML="";
                 letra3.innerHTML="n";
                 letra3.setAttribute("name","n");
        break;
        case 11: palabra11.setAttribute("class","Casilla");
                 palabra11.innerHTML="";
                 letra3.innerHTML="o";
                 letra3.setAttribute("name","o");
        break;
        case 12: palabra12.setAttribute("class","Casilla");
                 palabra12.innerHTML="";
                 letra3.innerHTML="o";
                 letra3.setAttribute("name","o");
        break;
        case 13: palabra13.setAttribute("class","Casilla");
                 palabra13.innerHTML="";
                 letra3.innerHTML="n";
                 letra3.setAttribute("name","n");
        break;
        }
    
}

//////////Palabra 9 Good morning!
function aleatorio9()
{
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");
    palabra7 = document.getElementById("7");
    palabra8 = document.getElementById("8");
    palabra9 = document.getElementById("9");
    palabra10 = document.getElementById("10");
    palabra11 = document.getElementById("11");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(3-0+1)+0);
    rand2 = Math.floor(Math.random()*(8-5+1)+5);
    rand3 = Math.floor(Math.random()*(11-9+1)+9);
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="G";
                letra2.setAttribute("name","G");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="o";
                letra2.setAttribute("name","o");
        break;
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra2.innerHTML="o";
                letra2.setAttribute("name","o");
        break;
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra2.innerHTML="d";
                letra2.setAttribute("name","d");
        break;
        
        }
        switch(rand2)
        {
        
        case 5: palabra5.setAttribute("class","Casilla");
                palabra5.innerHTML="";
                letra1.innerHTML="m";
                letra1.setAttribute("name","m");
        break;
        case 6: palabra6.setAttribute("class","Casilla");
                palabra6.innerHTML="";
                letra1.innerHTML="o";
                letra1.setAttribute("name","o");
        break;
        case 7: palabra7.setAttribute("class","Casilla");
                 palabra7.innerHTML="";
                 letra1.innerHTML="r";
                 letra1.setAttribute("name","r");
        break;
        case 8: palabra8.setAttribute("class","Casilla");
                 palabra8.innerHTML="";
                 letra1.innerHTML="n";
                 letra1.setAttribute("name","n");
        break;
        }
        switch(rand3)
        {
        case 9: palabra9.setAttribute("class","Casilla");
                 palabra9.innerHTML="";
                 letra3.innerHTML="i";
                 letra3.setAttribute("name","i");
        break;
        case 10: palabra10.setAttribute("class","Casilla");
                 palabra10.innerHTML="";
                 letra3.innerHTML="n";
                 letra3.setAttribute("name","n");
        break;
        case 11: palabra11.setAttribute("class","Casilla");
                 palabra11.innerHTML="";
                 letra3.innerHTML="g";
                 letra3.setAttribute("name","g");
        break;
        }
}
//////////Palabra 10 Good night!
function aleatorio10()
{
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");
    palabra7 = document.getElementById("7");
    palabra8 = document.getElementById("8");
    palabra9 = document.getElementById("9");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(3-0+1)+0);
    rand2 = Math.floor(Math.random()*(7-5+1)+5);
    rand3 = Math.floor(Math.random()*(9-8+1)+8);
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="G";
                letra2.setAttribute("name","G");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="o";
                letra2.setAttribute("name","o");
        break;
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra2.innerHTML="o";
                letra2.setAttribute("name","o");
        break;
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra2.innerHTML="d";
                letra2.setAttribute("name","d");
        break;
        
        }
        switch(rand2)
        {
        
        case 5: palabra5.setAttribute("class","Casilla");
                palabra5.innerHTML="";
                letra1.innerHTML="n";
                letra1.setAttribute("name","n");
        break;
        case 6: palabra6.setAttribute("class","Casilla");
                palabra6.innerHTML="";
                letra1.innerHTML="i";
                letra1.setAttribute("name","i");
        break;
        case 7: palabra7.setAttribute("class","Casilla");
                 palabra7.innerHTML="";
                 letra1.innerHTML="g";
                 letra1.setAttribute("name","g");
        break;
        }
        switch(rand3)
        {
        case 8: palabra8.setAttribute("class","Casilla");
                 palabra8.innerHTML="";
                 letra3.innerHTML="h";
                 letra3.setAttribute("name","h");
        break;
        case 9: palabra9.setAttribute("class","Casilla");
                 palabra9.innerHTML="";
                 letra3.innerHTML="t";
                 letra3.setAttribute("name","t");
        break;
        }
}

//////////Palabra 11 Goodbye!
function aleatorio11()
{
    palabra0 = document.getElementById("0");
    palabra1 = document.getElementById("1");
    palabra2 = document.getElementById("2");
    palabra3 = document.getElementById("3");
    palabra4 = document.getElementById("4");
    palabra5 = document.getElementById("5");
    palabra6 = document.getElementById("6");
    
    letra1 = document.getElementById("letra1");
    letra2 = document.getElementById("letra2");
    letra3 = document.getElementById("letra3");
    
    rand1 = Math.floor(Math.random()*(1-0+1)+0);
    rand2 = Math.floor(Math.random()*(4-2+1)+2);
    rand3 = Math.floor(Math.random()*(6-5+1)+5);
        
        switch(rand1)
        {
        case 0: palabra0.setAttribute("class","Casilla");
                palabra0.innerHTML="";
                letra2.innerHTML="G";
                letra2.setAttribute("name","G");
        break;
        case 1: palabra1.setAttribute("class","Casilla");
                palabra1.innerHTML="";
                letra2.innerHTML="o";
                letra2.setAttribute("name","o");
        break;
        }
        switch(rand2)
        {
        
        case 2: palabra2.setAttribute("class","Casilla");
                palabra2.innerHTML="";
                letra1.innerHTML="o";
                letra1.setAttribute("name","o");
        break;
        case 3: palabra3.setAttribute("class","Casilla");
                palabra3.innerHTML="";
                letra1.innerHTML="d";
                letra1.setAttribute("name","d");
        break;
        case 4: palabra4.setAttribute("class","Casilla");
                 palabra4.innerHTML="";
                 letra1.innerHTML="b";
                 letra1.setAttribute("name","b");
        break;
        }
        switch(rand3)
        {
        case 5: palabra5.setAttribute("class","Casilla");
                 palabra5.innerHTML="";
                 letra3.innerHTML="y";
                 letra3.setAttribute("name","y");
        break;
        case 6: palabra6.setAttribute("class","Casilla");
                 palabra6.innerHTML="";
                 letra3.innerHTML="e";
                 letra3.setAttribute("name","e");
        break;
        }
}

function testing()
{
    var letra1   = document.getElementById("letra1");
    var letra2   = document.getElementById("letra2");
    var letra3   = document.getElementById("letra3");
    
    var respuesta= document.getElementById("resultado");
    
    var boton    = document.getElementById("btn");
    
    if(letra1.getAttribute("name")==letra1.parentNode.getAttribute("name")&&
       letra2.getAttribute("name")==letra2.parentNode.getAttribute("name")&&
       letra3.getAttribute("name")==letra3.parentNode.getAttribute("name"))
    {
       boton.style.display='block';
       respuesta.innerHTML="¡Correcto!";    
    }else
    {
        boton.style.display='none';
        respuesta.innerHTML="";
    }   
}