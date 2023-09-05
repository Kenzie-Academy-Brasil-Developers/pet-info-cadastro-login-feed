// Desenvolva as funcionalidades de login aqui

import { loginRequest } from "./requests.js";

export const handleLogin = () => {
    const inputs = document.querySelectorAll(".inputLogin");

    const button = document.querySelector("#login__submit");

    button.addEventListener("click", async (event) => {
        event.preventDefault();

        const loginBody = {};

        inputs.forEach(input => {
            loginBody[input.name] = input.value;
        });
       await loginRequest(loginBody);
    });
}

handleLogin();

