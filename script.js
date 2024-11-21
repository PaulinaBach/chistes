// Seleccionamos los elementos HTML
const jokeButton = document.getElementById('jokeButton');
const jokeText = document.getElementById('jokeText');

// Función para obtener un chiste de programación desde la API en español
async function fetchProgrammingJoke() {
    const url = 'https://v2.jokeapi.dev/joke/Programming?lang=es'; // Chistes de programación en español
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Verificamos si es un chiste de tipo "two-part" (chiste con pregunta y respuesta)
        if (data.type === 'twopart') {
            jokeText.innerHTML = `${data.setup} <br> <strong>${data.delivery}</strong>`;
        } else {
            // Si es un chiste tipo "single", mostramos solo el texto
            jokeText.innerHTML = data.joke;
        }
    } catch (error) {
        jokeText.innerHTML = '¡Ups! Ocurrió un error al obtener el chiste.';
    }
}

// Asociamos el evento click al botón para obtener un chiste
jokeButton.addEventListener('click', fetchProgrammingJoke);
