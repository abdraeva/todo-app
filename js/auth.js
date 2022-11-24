const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const submitButton = document.querySelector(".submitBtn");
const error = document.querySelector(".error");


const users = JSON.parse(localStorage.getItem("users"))
console.log(users)



submitButton.addEventListener("click", (e) =>{
  e.preventDefault();

  const isUser = !!users.find(item => item.email === emailInput.value)

  console.log(isUser)

  if(emailInput.value !== "" && passwordInput.value !== ""){
    if(isUser){
      localStorage.setItem("isAuth", "true")
      window.open("../index.html", "_self")


    }else{
      error.innerHTML = "Fill the area"
  
    }


  } 

})

window.addEventListener("load", () =>{
  if(localStorage.getItem("isAuth") === "true"){
    window.open("../index.html", "_self")
  
  }


})
