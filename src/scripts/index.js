// Desenvolva as funcionalidades de login aqui
import { emailUser} from "./requests.js";


const handlEmailUser = () => {

    const registerInputs = document.querySelector(".text3");
    const loginButton = document.querySelector(".login__submit");

    loginButton.addEventListener("click",async (event) => {
        event.preventDefault()
        const emailUser = {}

        registerInputs.forEach(input =>{
            emailUser[input.email] = input.value;
        });

        const user = await emailUser(emailUser);
        console.log(user);
    })
};

handlEmailUser();