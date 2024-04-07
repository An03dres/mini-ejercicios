function ejecutarAlgoritmo() {
    var estaEnchufada = prompt("¿La lámpara está enchufada? (Responde si/no)").toLowerCase();

    if (estaEnchufada === "no") {
        alert("Enchufarla.");
        document.getElementById("resultado").textContent = "Por favor, enchufa la lámpara.";
    } else if (estaEnchufada === "si") {
        var focoQuemado = prompt("¿El foco está quemado? (Responde si/no)").toLowerCase();
        if (focoQuemado === "si") {
            alert("Reemplazar el foco.");
            document.getElementById("resultado").textContent = "Por favor, reemplaza el foco.";
        } else if (focoQuemado === "no") {
            alert("Comprar nueva lámpara.");
            document.getElementById("resultado").textContent = "Comprar nueva lámpara.";
        } else {
            alert("Respuesta inválida. Por favor, responde si o no.");
        }
    } else {
        alert("Respuesta inválida. Por favor, responde si o no.");
    }
}


