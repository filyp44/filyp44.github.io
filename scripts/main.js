let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');
let monImage = document.querySelector('img');

function définirNomUtilisateur() {
  let monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Mozilla est cool, ' + monNom;
}

if (!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré;
}

monImage.addEventListener('click', function() {
    let monSrc = monImage.getAttribute('src');
    if (monSrc === 'images/mon-image1.jpg') {
      monImage.setAttribute('src', 'images/mon-image2.jpg');
    } else {
      monImage.setAttribute('src', 'images/mon-image1.jpg');
    }
});

monBouton.addEventListener('click', function() {
  définirNomUtilisateur();
});