import { renderAllPosts } from "./render.js";
import { getAllPosts, getCurrentUserInfo, getProfile } from "./requests.js";

function auth () {
  const token = localStorage.getItem("@petinfo:token");

  if(!token) {
    window.location.href = "../../index.html";
  }
}
auth();


async function showUserMenu() {
  const userAction = document.querySelector(".user__image");
  const menu = document.querySelector(".user__logout");
  const userImg = document.querySelector(".user__image");
  const userName = document.querySelector(".user__uniquename");

  const user = await getCurrentUserInfo();
  userImg.src = user.avatar
  userName.innerText = user.username;
  userAction.addEventListener("click", (e) => {
    menu.classList.toggle("hidden");
  });
}

function main() {

  showUserMenu();

  renderAllPosts();
}
main();

const logoutButton = () => {
  const modal = document.querySelector(".modal__controller");
  const logoutButton = document.querySelector(".logout__button")

  logoutButton.addEventListener('click', () => {
    modal.close();

    localStorage.clear();

    window.location.href = "../../index.html";
  });
};

const loadUserData = () => {
  const usuarioLogado = {
    nome: "Nome do Usuário",
    fotoPerfil: ".use__image",
  };

  const userNameElement = document.getElementById("user__uniquename");
  const profileButton = document.querySelector(".user__image");

  userNameElement.textContent = usuarioLogado.nome;
  profileButton.src = usuarioLogado.fotoPerfil;
}


const logout = () => {
  localStorage.clear();

  window.location.herf = "pagina-de-login.html";

  window.addEventListener(".logout__button", () => {
    loadUserData();

    const logoutButton = document.getElementById(".logout__button");
    logoutButton.addEventListener("click", logout);
  });
}

renderAllPosts();
getProfile();
logoutButton();