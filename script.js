document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const status = document.getElementById('form-status');

    if (name.length < 2) {
        status.innerText = "Proszę podać poprawne imię.";
        status.style.color = "red";
    } else {
        status.innerText = "Dziękujemy, " + name + "! Wiadomość została wysłana.";
        status.style.color = "green";
        this.reset(); 
    }
});