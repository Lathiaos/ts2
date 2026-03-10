document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();

        const form = document.getElementById('form');
        const prenom = document.getElementById('prenom');
        const nom = document.getElementById('nom');
        const email = document.getElementById('email');
        const adresse = document.getElementById('adresse');
        const npa = document.getElementById('npa');
        const ville = document.getElementById('ville');
        const message = document.getElementById('message');

        document.getElementById('quit-prenom').textContent = prenom.value;
        document.getElementById('quit-nom').textContent = nom.value;
        document.getElementById('quit-email').textContent = email.value;
        document.getElementById('quit-adresse').textContent = adresse.value;
        document.getElementById('quit-npa').textContent = npa.value;
        document.getElementById('quit-ville').textContent = ville.value;
        document.getElementById('quit-message').textContent = message.value;

        document.getElementById('form').style.display = 'none';
        const quit = document.getElementById('quit');
        quit.style.display = 'block';
    });
});