//Generare una password utilizzando solo i primi 3 caratteri dei dati 
//inseriti dall'utente

const userName = prompt('Inserisci il tuo nome:')

nameFirstthreeLetters = userName.substring(0, 3); //con questo seleziono solo i primi 3 caratteri 

let nameUppercase = nameFirstthreeLetters[0].toUpperCase(); //con questo prendo SOLO LA PRIMA lettera e la rendo maiuscola

let nameRest = nameFirstthreeLetters.substring(1); //con questo prendo TUTTO IL RESTO del nome minuscolo (da sommare alla maiuscola)

let NameFirstthreeLetters = nameUppercase + nameRest; //con questo unisco la prima lettera maiuscola col resto del nome minuscolo

const userLastname = prompt('inserisci il tuo cognome:')

lastnameFirstthreeLetters = userLastname.substring(0, 3);

let lastnameUppercase = lastnameFirstthreeLetters[0].toUpperCase();

let lastnameRest = lastnameFirstthreeLetters.substring(1);

let LastnameFirstthreeLetters = lastnameUppercase + lastnameRest;

const userColor = prompt('Inserisci il tuo colore preferito:')

colorFirsthreeLetters = userColor.substring(0, 3);

let colorUppercase = colorFirsthreeLetters[0].toUpperCase();

let colorRest = colorFirsthreeLetters.substring(1);

let ColorFirstthreeLetters = colorUppercase + colorRest;

const userNumber = prompt('Inserisci un numero casuale:')

//--------------------------------

let htmlElement = document.getElementById('password');

htmlElement.innerHTML = (`La password consigliata è: ${NameFirstthreeLetters}${LastnameFirstthreeLetters}${ColorFirstthreeLetters}${userNumber}`)