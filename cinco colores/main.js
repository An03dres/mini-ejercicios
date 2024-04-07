function verificarColor() {
    var color = document.getElementById("colorSelect").value;

    switch (color) {
        case "azul":
            document.getElementById("respuesta").innerHTML = "El azul es como el mar, siempre que el cielo sea azul (y sea de día).";
            break;
        case "verde":
            document.getElementById("respuesta").innerHTML = "El verde es el color de la naturaleza, lleno de vida y frescura.";
            break;
        case "rojo":
            document.getElementById("respuesta").innerHTML = "El rojo simboliza pasión y energía, como el fuego ardiente.";
            break;
        case "amarillo":
            document.getElementById("respuesta").innerHTML = "El amarillo es el color del sol, irradiando alegría y optimismo.";
            break;
        case "violeta":
            document.getElementById("respuesta").innerHTML = "El violeta es un color real y místico, asociado con la imaginación y la creatividad.";
            break;
        default:
            document.getElementById("respuesta").innerHTML = "Ese no es uno de los colores disponibles. Por favor, elige azul, verde, rojo, amarillo o violeta.";
    }
}
