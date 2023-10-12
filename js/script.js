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

// Eventi
button.addEventListener('click', function() {
    alert.className = '.alert .d-none';
    let utentMail = document.getElementById('mail').value;
    let founded = false;
    //Condizioni
    for (let i = 0; i < mail.length; i++) {
        let utentName = mail[i];
        if (utentName === utentMail) {
            founded = true;
        } 
    }
    let text, warning;
        if (founded) {
            warning = 'alert-success';
            text = ` Bentornato `;
        } else {
            warning = 'alert-danger';
            text = ` L'utente non è registrato `;
        }
        alert.innerText = text;
        alert.className.add(warning);
        alert.className.remove('.d-none');
}
);



