function objetos()
{
    var resultado   = document.getElementById("resultado");
    var resultado2  = document.getElementById("resultado2");
    var fondo = document.getElementById("prueba");
    //fondo.setAttribute("src","Archivos/sala-escenario/sala.jpg");
    var objeto = event.srcElement.id

    switch(objeto)
    {
    case "leche":
        resultado.innerHTML = "This is Milk";
        resultado2.innerHTML= "Esta es Leche";
        break;
    case "microondas":
        resultado.innerHTML = "This is a Microwave Oven";
        resultado2.innerHTML= "Este es un Microondas";
        break;
    case "platos":
        resultado.innerHTML = "These are Dishes";
        resultado2.innerHTML= "Estos son Platos";
        break;
    case "estufa":
        resultado.innerHTML = "This is a Stove";
        resultado2.innerHTML= "Esta es una Estufa";
        break;
    case "cucharas":
        resultado.innerHTML = "These are Spoons";
        resultado2.innerHTML= "Estas son Cucharas";
        break;
    case "refrigerador":
        resultado.innerHTML = "This is a Fridge";
        resultado2.innerHTML= "Este es Refrigerador";
        break;
    case "vasos":
        resultado.innerHTML = "These are Glasses";
        resultado2.innerHTML= "Estos son Vasos";
        break;
    case "tazas":
        resultado.innerHTML = "These are Cups";
        resultado2.innerHTML= "Estas son Tazas";
        break;
    case "silla":
        resultado.innerHTML = "This is a Chair";
        resultado2.innerHTML= "Esta es una Silla";
        break;
    case "pan":
        resultado.innerHTML = "This is a Bread";
        resultado2.innerHTML= "Esta es un Pan";
        break;
    case "sal":
        resultado.innerHTML = "This is Salt";
        resultado2.innerHTML= "Esta es Sal";
        break;
    case "pimienta":
        resultado.innerHTML = "This is Pepper";
        resultado2.innerHTML= "Esta es Pimienta";
        break;
    case "huevos":
        resultado.innerHTML = "These are Eggs";
        resultado2.innerHTML= "Estos son Huevos";
        break;
    case "queso":
        resultado.innerHTML = "This is Cheese";
        resultado2.innerHTML= "Este es Queso";
        break;
    case "olla":
        resultado.innerHTML = "This is a Cooking Pot";
        resultado2.innerHTML= "Esta es una Olla";
        break;
    case "naranja":
        resultado.innerHTML = "This is an Orange";
        resultado2.innerHTML= "Esta es una Naranja";
        break;
    case "manzana":
        resultado.innerHTML = "This is an Apple";
        resultado2.innerHTML= "Esta es una Manzana";
        break;
    case "sandia":
        resultado.innerHTML = "This is a Watermelon";
        resultado2.innerHTML= "Esta es una Sandía";
        break;
    case "uvas":
        resultado.innerHTML = "These are Grapes";
        resultado2.innerHTML= "Estas son Uvas";
        break;
    case "platano":
        resultado.innerHTML = "This is a Banana";
        resultado2.innerHTML= "Este es un Plátano";
        break;
    case "pina":
        resultado.innerHTML = "This is a Pineapple";
        resultado2.innerHTML= "Esta es una Piña";
        break;
    case "manzana2":
        resultado.innerHTML = "This is an Apple";
        resultado2.innerHTML= "Esta es una Manzana";
        break;
    }
}