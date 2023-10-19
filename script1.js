document.addEventListener("DOMContentLoaded", function() {
    const acheterButtons = document.querySelectorAll('.acheter');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    acheterButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
            const livreId = button.getAttribute('data-livre');
            // Utilisez livreId pour déterminer quel livre a été choisi
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Gérer les options de paiement
    const visaBtn = document.getElementById('visa');
    const orangeBtn = document.getElementById('orange');
    const mtnBtn = document.getElementById('mtn');
    const waveBtn = document.getElementById('wave');

    visaBtn.addEventListener('click', function() {
        // Redirection vers la page de paiement Visa
    });

    orangeBtn.addEventListener('click', function() {
        // Redirection vers la page de paiement Orange Money
    });

    mtnBtn.addEventListener('click', function() {
        // Redirection vers la page de paiement MTN Mobile Money
    });

    waveBtn.addEventListener('click', function() {
        // Redirection vers la page de paiement Wave Money
    });
});
