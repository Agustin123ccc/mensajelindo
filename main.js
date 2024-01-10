function mostrarMensaje() {
    const mensaje = generarMensaje();
    document.getElementById('mensaje').innerHTML = mensaje;
}

function generarMensaje() {
    const mensajes = [
        "Sos lo mejor que me paso.",
        "Te amo con toda mi vida.",
        "Siempre agradecido por tenerte a mi lado.",
        "Sos mi todo, mi amor eterno.",
        "Cada día con vos es un regalo.",
        "Por mucho mas tiempo juntos miamorcito",
        // Agrega más mensajes según tus preferencias
    ];

    const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
    return mensajes[indiceAleatorio];
}