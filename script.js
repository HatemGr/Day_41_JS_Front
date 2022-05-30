// Fonctionnalité 1 :
let footer = document.querySelector('footer');
let nb_clique = 0;

function logClic() {
  nb_clique += 1;
  console.log(`clic numéro ${nb_clique}`);
};

footer.onclick = logClic;

//Fonctionnalité 2 :
let hamburgerMenu = document.querySelector('#navbarHeader');
let hamburgerButton = document.querySelector('button.navbar-toggler');

function menu_toggle() {
  hamburgerMenu.classList.toggle('collapse');
};

hamburgerButton.addEventListener("click",menu_toggle)

//Fonctionnalité 3 :
let firstCard = document.querySelector('div.album div.card');
let buttonEditFirstCard = firstCard.querySelector('div.btn-group').lastElementChild

function colorToRed() {
  firstCard.style.color="red"
}

buttonEditFirstCard.addEventListener('click',colorToRed)

//Fonctionnalité 4 :
let secondCard = document.querySelectorAll('div.album div.card')[1];
let buttonEditSecondCard = secondCard.querySelector('div.album div.btn-group').lastElementChild

function switchBlackgreen() {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "#212529"
  } else {
    secondCard.style.color = "green"
  }
}

buttonEditSecondCard.addEventListener('click',switchBlackgreen)

// Fonctionnalité 5 :
let bootstrapLink = document.getElementsByTagName('link')[0]
let navbar = document.querySelector('.navbar')

function switchBootstrap() {
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false
  } else {
    bootstrapLink.disabled =true
  }
}

navbar.addEventListener('dblclick',switchBootstrap)
// Fonctionnalité 6 :
