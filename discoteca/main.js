function verificarEdad() {
    var edad = document.getElementById("edadInput").value;

    if (edad === "") {
        document.getElementById("mensaje").innerHTML = "Por favor, ingresa tu edad.";
    } else {
        edad = parseInt(edad);
        if (isNaN(edad)) {
            document.getElementById("mensaje").innerHTML = "Por favor, ingresa un número válido para la edad.";
        } else {
            if (edad < 18) {
                document.getElementById("mensaje").innerHTML = "Lo siento, eres menor de edad. No puedes ingresar a la discoteca.";
            } else if (edad === 18) {
                document.getElementById("mensaje").innerHTML = "¡Felicidades! Acabas de alcanzar la mayoría de edad. Puedes ingresar a la discoteca, pero ten cuidado.";
            } else {
                document.getElementById("mensaje").innerHTML = "¡Bienvenido! Eres mayor de edad y puedes ingresar a la discoteca. ¡Que te diviertas!";
            }
        }
    }
}

