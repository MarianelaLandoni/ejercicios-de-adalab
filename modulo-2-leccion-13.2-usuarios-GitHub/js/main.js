"use strict";

const inputUser = document.querySelector(".js_inputUser");
const search = document.querySelector(".js_search");

function getUser() {
  const user = inputUser.value;
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      const userName = document.querySelector(".js_name");
      userName.innerHTML = `Nombre: ${data.login}`;
      const avatar = document.querySelector(".js_avatar");
      avatar.src = data.avatar_url;
      const repo = document.querySelector(".js_repositories");
      repo.innerHTML = `Número de repositorios: ${data.public_repos}`;
    });
}

search.addEventListener("click", getUser);
