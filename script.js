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
let HTMLCard = document.querySelector('div.album div.card');
let buttonEditFirstCard = HTMLCard.querySelector('div.btn-group').lastElementChild

function colorToRed() {
  HTMLCard.style.color="red"
}

buttonEditFirstCard.addEventListener('click',colorToRed)

//Fonctionnalité 4 :
let secondCard = document.querySelectorAll('div.album div.card')[1];
let buttonEditSecondCard = secondCard.querySelector('div.album div.btn-group').lastElementChild;

function switchBlackgreen() {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "#212529"
  } else {
    secondCard.style.color = "green"
  }
}

buttonEditSecondCard.addEventListener('click',switchBlackgreen);

// Fonctionnalité 5 :
let bootstrapLink = document.getElementsByTagName('link')[0];
let navbar = document.querySelector('.navbar');

function switchBootstrap() {
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false
  } else {
    bootstrapLink.disabled =true
  }
}

navbar.addEventListener('dblclick',switchBootstrap);

// Fonctionnalité 6 :
let viewButtons = document.querySelectorAll('div.album div.col-md-4 div.btn-group .btn-success')

viewButtons.forEach(item => {item.addEventListener('mouseenter', event => {
  let card = item.parentElement.parentElement.parentElement.parentElement.parentElement
  card.querySelector('.card-text').classList.toggle('collapse');
  if (card.querySelector('.card-img-top').style.width != "20%") {
    card.querySelector('.card-img-top').style.width = "20%";
  } else {
    card.querySelector('.card-img-top').style.width = "100%"
  }
})})

// Fonctionnalité 7 :
let rightArrowBtn = document.querySelector('a.btn-secondary');

function lastToFirst() {
  let firstCard = document.querySelector('div.album div.row').firstElementChild;
  let lastCard = document.querySelector('div.album div.row').lastElementChild;
  lastCard.remove();
  firstCard.parentNode.insertBefore(lastCard,firstCard);
}

rightArrowBtn.addEventListener('click',lastToFirst);

// Fonctionnalité 8 :
let leftArrowBtn = document.querySelector('a.btn-primary')

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function firstTolast() {
  let firstCard = document.querySelector('div.album div.row').firstElementChild;
  let lastCard = document.querySelector('div.album div.row').lastElementChild;
  firstCard.remove();
  insertAfter(firstCard,lastCard);
}

leftArrowBtn.addEventListener('click',function (event) {
  event.preventDefault();
  firstTolast()}); 

// Fonctionnalité 9 :
