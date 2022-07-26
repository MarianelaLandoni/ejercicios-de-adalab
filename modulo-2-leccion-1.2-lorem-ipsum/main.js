"use strict";

const containerElement = document.querySelector(".container");

/* Para poner varios elementos se ponen entre comillas simples, separados sin comas */
const content = '<h1>Lorem ipsum</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p><img src = "http://via.placeholder.com/350x150">';


containerElement.innerHTML = content;