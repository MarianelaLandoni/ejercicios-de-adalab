'use strict';

//Variables para traer los elementos del HTML a JS

const inputCharacter = document.querySelector('.js_inputUser');
const search = document.querySelector('.js_search');
const listUl = document.querySelector('.js_nameCharacter');

// Variable global que contendrá los datos que le pasemos en un array
let data = [];

//Función para pintar los datos que queremos, en este caso los nombres, en una lista del HTML
function renderCharacters() {
  let html = '';
  for (const characterData of data) {
    html += `<li>${characterData.name}</li>`;
  }
  listUl.innerHTML = html;
}

function getCharacter() {
  const character = inputCharacter.value;

  fetch(`https://swapi.py4e.com/api/people/?search=${character}`)
    .then((response) => response.json())
    .then((dataCharacter) => {
      data = dataCharacter.results;
      renderCharacters();
    });
}

search.addEventListener('click', getCharacter);

//practica

const newButton = document.querySelector('.js_newButton');

// function handleClick(event) {
//   event.preventDefault();
//   for (const item of dataAnime) {
//     console.log(data);
//     console.log(item.name);
//   }
// }

newButton.addEventListener('click', (event) => {
  event.preventDefault();
  for (const item of dataAnime) {
    console.log(data);
    console.log(item.name);
  }
});
