"use strict";

//Hay que añadir parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un integer entre diferentes valores, la url quedaría así https://api.rand.fun/number/integer?min=0&max=10000

function getNumber() {
  fetch("https://api.rand.fun/number/integer?min=0&max=1000")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js_result").innerHTML = data.result;
    });
}
document.querySelector(".js_randomNumber").addEventListener("click", getNumber);
