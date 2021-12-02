// vado a creare i prompt con le richieste dei dati

const userName = prompt('Inserisci qua il tuo nome');

const userLastname = prompt('Inserisci qua il tuo cognome');

const userColor = prompt('Inserisci qua il tuo colore preferito');

const userNumber = prompt('Inserisci qua un numero casuale');

// creo la variabile da inserire dentro il div "password"

let htmlElement = document.getElementById('password');

htmlElement.innerHTML = (`La password consigliata è: ${userName}${userLastname}${userColor}${userNumber}`)