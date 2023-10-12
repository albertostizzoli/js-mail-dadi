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
button.addEventListener('click', function() {
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

