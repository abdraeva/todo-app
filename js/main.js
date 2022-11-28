



const title = document.querySelector(".title")
const description = document.querySelector(".description")
const image = document.querySelector(".image")
const addTodo = document.querySelector(".addTodo")
const error = document.querySelector(".error")
const row = document.querySelector(".row")


window.addEventListener("load", () => {
  if(!localStorage.getItem("todo")) {
    localStorage.setItem("todo", JSON.stringify([]))
  }else {
    const todo = JSON.parse(localStorage.getItem("todo"))

    const todoWithId = todo.map((item, index) =>{
      return {...item, id: index}
    })

    localStorage.setItem("todo", JSON.stringify(todoWithId))
    
    const newTodo = JSON.parse(localStorage.getItem("todo"))
    card(newTodo)
  }
})


addTodo.addEventListener("click", (event) =>{
  event.preventDefault();

  if(title.value !== "" && description.value !== "" && image.value !== ""){
   const data = {
    title: title.value,
    description: description.value,
    image: image.value
   }

   const todo = JSON.parse(localStorage.getItem("todo"));

   localStorage.setItem("todo", JSON.stringify(
    [
      ...todo,
      data
    ]
   ))
   window.location.reload()
   window.open("../index.html", "_self")

  }else{
    error.innerHTML = "Все поля должны быть заполнены!"
  }


})
