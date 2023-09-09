import { renderAllPosts } from "./render.js";
import { getAllPosts, getCurrentUserInfo } from "./requests.js";


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
  // Adiciona os eventos de click ao menu flutuante de logout
  showUserMenu();
  // Renderiza todos os posts no feed (render.js)
  renderAllPosts();
}
main();

const closeModal = () => {
  const modal = document.querySelector(".modal__controller");
  const close = document.querySelector(".modal__id")

  close.addEventListener('click', () => {
    modal.close();
  })
}

setTimeout(async () => {
  const accessPublication = document.querySelectorAll('.post__open ');
  console.log(accessPublication)

  const modal = document.querySelector(".modal__controller");

  const posts = await getAllPosts();
  
  

  accessPublication.forEach((element)=> {
    element.addEventListener('click', (event) => {
      const postId = event.target.dataset.id;
      const post = posts.find(post => post.id === postId);

      console.log(post);
      modal.showModal();
      closeModal();
      })
  });
}, 1000); 


const post = () => {

}

// Adiciona os eventos de click ao menu flutuante de logout
// 1. Capture o elemento "Acessar Publicação" via DOM


// Dessa forma você consegue acessar a propriedade data-id




showModal();
