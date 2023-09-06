// Desenvolva as funcionalidades de cadastro aqui

const handlNewUser = () => {

    const registerInputs = document.querySelector(".text3");
    const loginButton = document.querySelector("#register__submit");

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

const loginRedirect = () => {
    const button = document.querySelector("#redirect__button");

    button.addEventListener("click", (event) => {
      event.preventDefault();
      
      location.replace("../../")
  
    })
  }

handlNewUser();
loginRedirect();