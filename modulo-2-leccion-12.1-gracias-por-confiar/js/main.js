"use strict";

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

//Premium true: 'Bienvenida Yolanda. Gracias por confiar en nosotros.'
//Premuim false: 'Bienvenida Yolanda'

//const welcome = users.map ((premiumOrNot) => (premiumOrNot)

if (users.name === true) {
  console.log("Bienvenida " + users[0] + " Gracias por confiar en nosotros.");
} else {
  console.log("Bienvenida " + users[0]);
}
