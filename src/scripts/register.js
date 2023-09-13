import { createUser } from "./requests.js";

const handlNewUser = () => {

    const registerInputs = document.querySelectorAll(".fieldset__container input");
    const loginButton = document.querySelector("#register__submit");

    loginButton.addEventListener("click",async (event) => {
        event.preventDefault()
        const emailUser = {}

        registerInputs.forEach((input) =>{
            emailUser[input.name] = input.value;
        });
       
        const user = await createUser(emailUser);
      
    })
};

const loginRedirect = () => {
    const button = document.querySelector("#redirect__button");

    button.addEventListener("click", (event) => {
      event.preventDefault();
      
      location.replace("../../")
  
    })
  }

handlNewUser();
loginRedirect();
