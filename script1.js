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
