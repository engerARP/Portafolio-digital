let numeroMagico = Math.floor(Math.random() * 100) + 1;

function adivinar() {
    let intento = parseInt(document.getElementById("intento").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(intento) || intento < 1 || intento > 100) {
        mensaje.textContent = "Por favor, escribe un número válido entre 1 y 100.";
        return;
    }

    if (intento === numeroMagico) {
        mensaje.textContent = "🎉 ¡Correcto! Adivinaste el número mágico.";
    } else if (intento < numeroMagico) {
        mensaje.textContent = "🔼 El número mágico es mayor.";
    } else {
        mensaje.textContent = "🔽 El número mágico es menor.";
    }
}

function reiniciar() {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    document.getElementById("mensaje").textContent = "";
    document.getElementById("intento").value = "";
}
