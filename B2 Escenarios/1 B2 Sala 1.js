function objetos()
{
    var resultado   = document.getElementById("resultado");
    var resultado2  = document.getElementById("resultado2");
    var fondo = document.getElementById("prueba");
    //fondo.setAttribute("src","Archivos/sala-escenario/sala.jpg");
    var objeto = event.srcElement.id

    switch(objeto)
    {
    case "television":
        resultado.innerHTML = "This is a Television";
        resultado2.innerHTML= "Esta es una Televisión";
        break;
    case "maceta":
        resultado.innerHTML = "This is a Flower Pot";
        resultado2.innerHTML= "Esta es una Maceta";
        break;
    case "alfombra":
        resultado.innerHTML = "This is a Carpet";
        resultado2.innerHTML= "Esta es una Alfombra";
        break;
    case "cuadro":
        resultado.innerHTML = "This is a Picture";
        resultado2.innerHTML= "Este es un Cuadro";
        break;
    case "lampara":
        resultado.innerHTML = "This is a Lamp";
        resultado2.innerHTML= "Esta es una Lámpara";
        break;
    case "libro":
        resultado.innerHTML = "This is a Book";
        resultado2.innerHTML= "Este es un Libro";
        break;
    case "florero":
        resultado.innerHTML = "This is a Flower Vase";
        resultado2.innerHTML= "Este es un Florero";
        break;
    case "cojinL":
        resultado.innerHTML = "This is a Cushion";
        resultado2.innerHTML= "Este es un Cojín";
        break;
    case "cojinR":
        resultado.innerHTML = "This is a Cushion";
        resultado2.innerHTML= "Este es un Cojín";
        break;
    case "mesa":
        resultado.innerHTML = "This is a Table";
        resultado2.innerHTML= "Esta es una Mesa";
        break;
        
    }
}