const toggleMenuButton = document.getElementById('toggleMenuButton');
const toggleCallButton = document.getElementById('toggleCallButton');
const toggleFeedbackButton = document.getElementById('toggleFeedbackButton');
const toggleAside__call = document.getElementById('toggleAside__call');
const toggleAside__chat = document.getElementById('toggleAside__chat');
const toggleUpper__call = document.getElementById('toggleUpper__call');
const toggleUpper__chat = document.getElementById('toggleUpper__chat');
const buttonBurger__round = document.getElementById('buttonBurger__round');
const button__feedback = document.getElementById('button__feedback');
const button__call = document.getElementById('button__call');


const menu = document.getElementById('menu');

const menu__call = document.getElementById('menu__call');
const menu__feedback = document.getElementById('menu__feedback');
const menuOverlay = document.getElementById('menuOverlay');






toggleMenuButton.addEventListener('click', function (){
  menu.classList.toggle('hidden');
  menuOverlay.style.display = menu.classList.contains('hidden') ? 'none' : 'block';
});

toggleCallButton.addEventListener('click', function (){
  menu__call.classList.toggle('hidden__call');
  menuOverlay.style.display = menu__call.classList.contains('hidden__call') ? 'none' : 'block';
});

toggleFeedbackButton.addEventListener('click', function (){
  menu__feedback.classList.toggle('hidden__form');
  menuOverlay.style.display = menu__feedback.classList.contains('hidden__form') ? 'none' : 'block';
});



menuOverlay.addEventListener('click', function(){
  menu__call.classList.add('hidden__call');
  menuOverlay.style.display = 'none';
});
menuOverlay.addEventListener('click', function(){
  menu__feedback.classList.add('hidden__form');
  menuOverlay.style.display = 'none';
});


document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    menu.classList.add('hidden');
    menuOverlay.style.display = 'none';
  }
});


// отключение при нажатии на бургер
buttonBurger__round.addEventListener('click', function (event) {
  menuOverlay.style.display = 'none';
  // menu__feedback.classList.add('hidden__form');
  // menu__call.classList.add('hidden__call');
  menu.classList.toggle('hidden');
});

button__feedback.addEventListener('click', function (event) {
  menuOverlay.style.display = 'none';
  menu__feedback.classList.add('hidden__form');
  // menu.classList.toggle('hidden');
});

button__call.addEventListener('click', function (event) {
  menuOverlay.style.display = 'none';
  menu__call.classList.add('hidden__call');
  // menu.classList.toggle('hidden');
});

menuOverlay.addEventListener('click', function(){
  menu.classList.add('hidden');
  menuOverlay.style.display = 'none';
  // main__content.style.display = 'none';
});


// для вызываемого меню на 320 и 768

// заказать звонок
toggleAside__call.addEventListener('click', function (){
  menu__call.classList.toggle('hidden__call');
  menuOverlay.style.display = menu__call.classList.contains('hidden__call') ? 'none' : 'block';
});
menuOverlay.addEventListener('click', function(){
  menu__call.classList.add('hidden__call');
  menuOverlay.style.display = 'none';
});

// обратная связь
toggleAside__chat.addEventListener('click', function (){
  menu__feedback.classList.toggle('hidden__form');
  menuOverlay.style.display = menu__feedback.classList.contains('hidden__form') ? 'none' : 'block';
});
menuOverlay.addEventListener('click', function(){
  menu__feedback.classList.add('hidden__form');
  menuOverlay.style.display = 'none';
});


// на 720 в хедере

// заказать звонок
toggleUpper__call.addEventListener('click', function (){
  menu__call.classList.toggle('hidden__call');
  menuOverlay.style.display = menu__call.classList.contains('hidden__call') ? 'none' : 'block';
});
menuOverlay.addEventListener('click', function(){
  menu__call.classList.add('hidden__call');
  menuOverlay.style.display = 'none';
});

// обратная связь
toggleUpper__chat.addEventListener('click', function (){
  menu__feedback.classList.toggle('hidden__form');
  menuOverlay.style.display = menu__feedback.classList.contains('hidden__form') ? 'none' : 'block';
});
menuOverlay.addEventListener('click', function(){
  menu__feedback.classList.add('hidden__form');
  menuOverlay.style.display = 'none';
});


