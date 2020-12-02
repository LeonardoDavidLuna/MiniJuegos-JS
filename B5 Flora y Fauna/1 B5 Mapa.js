var x1 = "<br>We are in the North!";
var x2 = "¡Estamos en el Norte!";

var y1 = "<br>We are in the Center!";
var y2 = "¡Estamos en el Centro!";

var z1 = "<br>We are in the South!";
var z2 = "¡Estamos en el Sur!";

function myMoveFunction()
{
    document.getElementById("english").innerHTML = x1;
    document.getElementById("spanish").innerHTML = x2;
}

function myEnterFunction()
{
    document.getElementById("english").innerHTML = y1;
    document.getElementById("spanish").innerHTML = y2;
}

function myOverFunction()
{
    document.getElementById("english").innerHTML = z1;
    document.getElementById("spanish").innerHTML = z2;
}


function objetos()
{
    var english   = document.getElementById("english");
    var spanish  = document.getElementById("spanish");
    
    var objeto = event.srcElement.id

    switch(objeto)
    {
    case "magnolia":
        english.innerHTML = "This is a Magnolia! in the Northwest";
        spanish.innerHTML= "¡Este es una Magnolia! en el Noreste";
        break;
    case "coyote":
        english.innerHTML = "<br>This is a Coyote! in the Northwest";
        spanish.innerHTML= "¡Este es un Coyote! en el Noroeste";
        break;
    case "cactus":
        english.innerHTML = "<br>This is a Cactus! in the Northwest";
        spanish.innerHTML= "¡Este es un Cactus! en el Noreste";
        break;
    case "ballena":
        english.innerHTML = "<br>This is a Whale! in the Northwest";
        spanish.innerHTML= "¡Esta es una Ballena! en el Noreste";
        break;
    case "peyote":
        english.innerHTML = "<br>This is a Peyote! in the Northwest";
        spanish.innerHTML= "¡Este es un Peyote! en el Noreste";
        break;
    case "maguey":
        english.innerHTML = "<br>This is a Maguey! in the North";
        spanish.innerHTML= "¡Este es un Maguey! en el Norte";
        break;
    case "aguila":
        english.innerHTML = "<br>This is an Eagle! in the North";
        spanish.innerHTML= "¡Esta es un Àguila! en el Norte";
        break;
    case "girasol":
        english.innerHTML = "<br>This is a Sunflower! in the North";
        spanish.innerHTML= "¡Este es un Girasol! en el Norte!";
        break;
    case "cactus2":
        english.innerHTML = "<br>This is a Cactus! in the North";
        spanish.innerHTML= "¡Este es un Cactus! en el Norte";
        break;
    case "palmera":
        english.innerHTML = "<br>This is a Palm Tree! in the North";
        spanish.innerHTML= "¡Esta es una Palmera! en el Norte";
        break;
    case "pino":
        english.innerHTML = "<br>This is a Pine Tree! in the Norht";
        spanish.innerHTML= "¡Este es un Pino! en el Norte";
        break;
    case "zenzontle":
        english.innerHTML = "<br>This is a Zenzontle! in the Center";
        spanish.innerHTML= "¡Este es un Zenzontle! en el Centro";
        break;
    case "xolos":
        english.innerHTML = "This is a Xoloescuincle! in the Center";
        spanish.innerHTML= "¡Este es un Xoloescuincle! en el Centro";
        break;
    case "nochebuena":
        english.innerHTML = "This is a Poinsettia Flower! in the Center";
        spanish.innerHTML= "¡Esta es una Nochebuena! en el Centro";
        break;
    case "tecolote":
        english.innerHTML = "<br>This is an Owl! in the Center";
        spanish.innerHTML= "¡Este es un Tecolote! en el Centro";
        break;
    case "mariposa":
        english.innerHTML = "This is a Butterfly Monarch! in the Center";
        spanish.innerHTML= "¡Esta es una Mariposa Monarca! en el Centro";
        break;
    case "nopal":
        english.innerHTML = "<br>This is a Nopal! in the Center";
        spanish.innerHTML= "¡Este es un Nopal! en el Centro";
        break;
    case "cosmos":
        english.innerHTML = "<br>This is a Cosmos! in the Center";
        spanish.innerHTML= "¡Este es un Cosmos! en el Centro";
        break;
    case "ajolote":
        english.innerHTML = "This is a Mexican Axolotl! in the Center";
        spanish.innerHTML= "¡Este es un Ajolote Mexicano! en el Centro";
        break;
    case "mapache":
        english.innerHTML = "<br>This is a Raccon! in the South";
        spanish.innerHTML= "¡Este es un Mapache! en el Sur";
        break;
    case "cempasuchil":
        english.innerHTML = "This is a Cempasuchil! in the South";
        spanish.innerHTML= "¡Este es Cempasúchil! en el Sur";
        break;
    case "cacomiztle":
        english.innerHTML = "<br>This is a Cacomiztle! in the South";
        spanish.innerHTML= "¡Este es un Cacomiztle! en el Sur";
        break;
    case "guacamaya":
        english.innerHTML = "<br>This is a Macaw! in the East";
        spanish.innerHTML= "¡Esta es una Guacamaya! en el Este";
        break;
    case "ocelote":
        english.innerHTML = "<br>This is a Ocelot! in the East";
        spanish.innerHTML= "¡Este es un Ocelote! en el Este";
        break;
    
    }
}