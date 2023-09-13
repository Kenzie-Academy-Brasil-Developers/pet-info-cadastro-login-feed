import { toast } from "./toast.js";

export const baseUrl = "http://localhost:3333";


const green = "#087d5a"
const red = "#c83751"

export const requestHeaders = () => {
  const token = localStorage.getItem("@petinfo:token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export const loginRequest = async (requestBody) => {
  console.log(requestBody)
  const loginToken = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  }).then(async res => {
    const resConverted = await res.json()
    console.log(resConverted)

    if (res.ok) {
      toast("Login realizado com sucesso!", green)
      localStorage.setItem("@petinfo:token", resConverted.token);
      location.replace("./src/pages/feed.html");

      return resConverted;
    } else {
      toast(resConverted.message, red);
    }
  }).catch((err) => alert(err.message));
  console.log(loginToken)
  return loginToken;
};

// Informações de usuário logado
export async function getCurrentUserInfo() {

  const request = await fetch(`${baseUrl}/users/profile`, {
    method: "GET",
    headers: requestHeaders(),
  });
  const user = await request.json();

  return user;
}

// Listagem de posts
export async function getAllPosts() {
  const request = await fetch(`${baseUrl}/posts`, {
    method: "GET",
    headers: requestHeaders(),
  });
  const posts = await request.json();
  return posts;
}

// Desenvolva as funcionalidades de requisições aqui
export async function getPost(id) {
  const request = await fetch(`${baseUrl}/posts/${id}`, {
    method: "GET",
    headers: requestHeaders(),
  });
  const posts = await request.json();
  return posts;
}


export const createUser = async (requestBody) => {
  const userCreated = await fetch(`${baseUrl}/users/create`,{
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then(async res =>{
      const resConverted = await res.json();

      if(res.ok) {
        return resConverted;
        throw new Erros(res.message);
      } else {
        throw new Error(resConverted.message);
      }
    })
    .catch((err) => alert(err.message));

  return userCreated;
};

export const getProfile = async() => {
  const token = localStorage.getItem("@petinfo:token")

  const login = await fetch(`${baseUrl}/users/profile`,{
    method: "GET",
    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then(async res => {
    const resConverted = await res.json()

    if(res.ok){
    } else { 
      throw new Error(resConverted.message);
    }
  })
.catch(err => alert(err.message));

  return login;
}


