import { renderAllPosts } from "./render.js";
import { createUser, getAllPosts, getCurrentUserInfo, getProfile } from "./requests.js";


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

const logoutButton = () => {
  const modal = document.querySelector(".modal__controller");
  const logoutButton = document.querySelector(".logout__button")

  logoutButton.addEventListener('click', () => {
    modal.close();

    localStorage.clear();

    window.location.href = "pagina-de-login.html";
  });
};

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


function createPostModal(post) {

  const postUser = document.querySelector(".post__author-image");
  postUser.src = post.userImage;
  postUser.alt = "Imagem do usuário";

  const postDate = document.querySelector(".post__date");
  postDate.textContent = `Data de Criação: ${post.date}`;

  const postTitle = document.querySelector(".post__title");
  postTitle.textContent = post.title;

  const postContent = document.querySelector(".post__content");
  postContent.textContent = post.content;

  const postModal = document.getElementById("post__modal");

  modal.innerHTML = "";

  modal.append(postUser);
  modal.append(postDate);
  modal.appendChild(postTitle);
  modal.appendChild(postContent);
  modal.appendChild(postModal);

postModal.style.display = "block";

accessPublication();
createPostModal(post);
};


function handleCreatePostModal(post) {
 
  const accessPublication = document.querySelector(".modal__controller");
  // 2. Adicione um evento ao botão, e manipule o evento para acessar a propriedade "data-id":
  accessPublication.addEventListener('click', (event) => {
    // Dessa forma você consegue acessar a propriedade data-id
    const postID = event.target.dataset.id;
    console.log(accessPublication);
  });
};


function buttonsOpenPost() {
  const buttons = document.querySelectorAll(".open__post");

  const modalPost = document.querySelector(".modal__controller");
  
      for (let i = 0; i < buttons.length; i++){
          buttons[i].addEventListener("click", function(event) {
             const postId = event.target.id;

             for (let j = 0; j < posts.length; j++) {
              if(posts[j].id == postId){
                  const modalCreated = createCard(posts[j])
                 
                  modalPost.append(modalCreated)
                  modalPost.showModal()
              }
             }
          })
      } 
      return buttonsOpenPost   
}



handleCreatePostModal();
buttonsOpenPost();
renderAllPosts();
getProfile();

