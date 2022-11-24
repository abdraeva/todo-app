

// const search = document.querySelector(".search")

// search.addEventListener("input", (event) =>{
// const value = event.target.value;
//      if(value === "Alex"){
//       console.log("Exest Alex")
//      }else if(value === "Boots"){
//       console.log("Boots")
//      }
// })

// const select = document.querySelector(`.select`)

// select.addEventListener("change", (event) => {
//   const value = event.target.value;
//   const body = document.body;

//   if(value === "dark") {
//     body.style.background === "black"
//   }else{
//     body.style.background === "gold"
//   }
// })



// TO DO 
// const data = [
//   {
//     name: "alex",
//     age: 24
//   },
//   {
//     name: "alex",
//     age: 24
//   },

// ]
//  JSON.stringify - при отправке
//  JSON.parse - при получение

//  localStorage.setItem("name", JSON.stringify(data))

//  const name = localStorage.getItem("name")

//  console.log(name)


window.addEventListener("load", () =>{
  if(localStorage.getItem("isAuth") === "false"){
    window.open("../register.html", "_self")
  }
})


const singOut = document.querySelector(".signOut")

singOut.addEventListener("click", () =>{
  localStorage.setItem("isAuth", "false")
  window.open("../register.html", "_self")
  
})


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

  //  title.value = ""
  //  description.value = ""
  //  image.value = ""

  }else{
    error.innerHTML = "Все поля должны быть заполнены!"
  }


})




function card(base) {
  const template = base.map(({title, description, image}) => {
    return `

      <div class="boxes">
        <h4>${title}</h4>
        <img src=${image}>

        <p>${description}</p>

      </div>
    `
  }).join(" ")

  row.innerHTML = template
}