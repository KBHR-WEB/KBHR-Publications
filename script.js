// Sélectionnez le bouton du menu et le contenu du menu
var dropdownButton = document.querySelector('.dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');

// Ajoutez un gestionnaire d'événement au bouton pour ouvrir/fermer le menu
dropdownButton.addEventListener('click', function() {
    // Vérifiez si le menu est actuellement affiché
    if (dropdownContent.style.display === 'block') {
        // Si c'est le cas, masquez-le
        dropdownContent.style.display = 'none';
    } else {
        // Sinon, affichez-le
        dropdownContent.style.display = 'block';
    }
});

// Ajoutez un gestionnaire d'événement pour fermer le menu lorsqu'on clique en dehors
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        dropdownContent.style.display = 'none';
    }
});



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

profileButton.addEventListener('click', () => {
    // Gérer l'accès au profil de l'utilisateur
    alert("Rediriger vers la page de profil de l'utilisateur.");
});


// Sélectionnez le bouton du menu et le contenu du menu
var dropdownButton = document.querySelector('.dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');

// Ajoutez un gestionnaire d'événement au bouton pour ouvrir/fermer le menu
dropdownButton.addEventListener('click', function() {
    // Vérifiez si le menu est actuellement affiché
    if (dropdownContent.style.display === 'block') {
        // Si c'est le cas, masquez-le
        dropdownContent.style.display = 'none';
    } else {
        // Sinon, affichez-le
        dropdownContent.style.display = 'block';
    }
});

// Ajoutez un gestionnaire d'événement pour fermer le menu lorsqu'on clique en dehors
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        dropdownContent.style.display = 'none';
    }
});


profileButton.addEventListener('click', () => {
    // Gérer l'accès au profil de l'utilisateur
    alert("Rediriger vers la page de profil de l'utilisateur.");
});
