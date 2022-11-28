

const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const submitButton = document.querySelector(".submitBtn");
const error = document.querySelector(".error");


window.addEventListener("load", () =>{
  if(!localStorage.getItem("users")){
    localStorage.setItem("users", JSON.stringify([]))
  }
})

const users = JSON.parse(localStorage.getItem("users"))
// defaultPrevent позволить обновлять страничку
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

const isUser = !!users.find(item => item.email === emailInput.value)

  if(emailInput.value !== "" && passwordInput.value !== ""){
    if(isUser){
      error.innerHTML = "Пользователь с таким email уже существует"

    }else{
      const allUsers = JSON.parse(localStorage.getItem("users"));

      localStorage.setItem("users", JSON.stringify(
        [
          ...allUsers, 
          {email:emailInput.value, password:passwordInput.value}
        ]
      )
      )

      window.open("../auth.html", "_self")
    }

    emailInput.value = ""
    passwordInput.value = ""

  }else{
    error.innerHTML = "Fill the area"
  }
})


