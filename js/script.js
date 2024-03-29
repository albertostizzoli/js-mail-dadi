//  ESERCIZIO MAIL

//Array
const mail = [
    'pincopallino@example.com',
    'cappellaiomatto@example.com',
    'pippo@example.com',
    'paperino90@example.com',
    'alberto93@example.com',
    'alberto80@example.com',
];

// Variabili
const alert = document.querySelector('.alert');
const button = document.querySelector('button');

// Creo una funzione che mi permetta di effettuare un check della mail
button.addEventListener('click', function () {
    alert.className = '.alert .d-none';
    let utentMail = document.getElementById('mail').value;
    let founded = false;
    //Creo un ciclo che passi in rassegna tutti gli elementi dell'Array
    for (let i = 0; i < mail.length; i++) {
        let utentName = mail[i];
        if (utentName === utentMail) {
            founded = true;
        }
    }
    let text, warning;
    // Se la mail viene trovata
    if (founded) {
        warning = 'alert-success';
        text = ` Bentornato `;
        //Altrimenti
    } else {
        warning = 'alert-danger';
        text = ` L'utente non è registrato `;
    }
    alert.innerText = text;
    alert.className.add('.alert-success');
    alert.className.remove('.d-none');
}
);

// ESERCIZIO DADI

play.addEventListener('click', function () {
    let player_1 = Math.floor((Math.random() * 6) + 1);
    let playerIA = Math.floor((Math.random() * 6) + 1);
    //Condizioni che eseguirannno il risultato finale
    let result = document.getElementById('play');
    if (player_1 > playerIA) {
        Risultato = `Giocatore 1 hai vinto`;
    } else if (player_1 < playerIA) {
        Risultato = `Giocatore 1 hai perso`;
    } else {
        Risultato = `Pareggio `;
    }
    result.innerHTML = Risultato;
    const player = document.getElementById('player');
    player.innerHTML = `<strong>Giocatore 1</strong> ${randomInteger(1, 6)}`;

    const cpu = document.getElementById('cpu');
    cpu.innerHTML = `<strong>CPU'</strong> ${randomInteger(1, 6)}`;
}
);
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




