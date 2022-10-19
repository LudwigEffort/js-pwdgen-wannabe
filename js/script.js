// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito22

let name = prompt('What is your name?');
let lastName = prompt('What is your last name?');
let favoriteColor = prompt('What is your favorite color?');

let passwd = name + lastName + favoriteColor;

document.getElementById('password').innerHTML = passwd;
