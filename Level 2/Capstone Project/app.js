//const { default: axios } = require("axios")

//     //create
const todoForm = document.getElementById("todoForm")
console.log(todoForm)
// const container = document.createElement('div')
// const title = document.createElement('h1')
// const baseURL = "https://api.vschool.io/msvoren/todo/"
// console.log(axios)

function getData(){
    axios.get('https://api.vschool.io/msvoren/todo/')
        .then(response => listData(response.data))
        .catch(error => error)
}

getData()
function listData(arr){
            clearList()
            for(let i = 0; i < arr.length; i++){
                const h1 = document.createElement('h1')
                h1.textContent = arr[i].title
                document.getElementById("todo-list").appendChild(h1)


                const deleteButton = document.createElement("button")
                deleteButton.textContent = "Delete"
                h1.appendChild(deleteButton)
                deleteButton.addEventListener("click", ()=> {
                    axios.delete('https://api.vschool.io/msvoren/todo/' + arr[i]._id)
                    .then(getData)
                })

                const checkBox = document.createElement("button")
                //checkBox.type = "checkbox"
                checkBox.textContent = "Done"
                h1.appendChild(checkBox)
                const update = {completed : true}
                const otherUpdate = {completed : false}
                checkBox.addEventListener("click", () =>{
                
                    if(arr[i].completed === false){
                        axios.put('https://api.vschool.io/msvoren/todo/' + arr[i]._id, update)
                        .then(getData)
                        .catch(error => console.log(error))
                    }else if(arr[i].completed === true){
                        axios.put('https://api.vschool.io/msvoren/todo/' + arr[i]._id, otherUpdate)
                        .then(getData)
                        .catch(error => console.log(error))
                    }
                })
            
                // add event listener to the checkbox 
                const descriptionh2 = document.createElement('h2')
                descriptionh2.textContent = arr[i].description
                document.getElementById("todo-list").appendChild(descriptionh2)

                const img = document.createElement('img')
                img.src = arr[i].imgUrl
                img.style.width = "90px"
                img.style.height = "90px"
                document.getElementById("todo-list").appendChild(img)

                const priceh2 = document.createElement('h2')
                priceh2.textContent = arr[i].price
                document.getElementById("todo-list").appendChild(priceh2)

                if(arr[i].completed === true){
                    h1.style.textDecoration = "line-through"
                    descriptionh2.style.textDecoration = "line-through"
                    priceh2.style.textDecoration = "line-through"

                }
}
}
            function clearList (){
                const el = document.getElementById("todo-list")
                while(el.firstChild){
                    el.removeChild(el.firstChild)
                }
            }

            todoForm.addEventListener("submit", function(e) {
                e.preventDefault()
                const newTodo = {
                    title: todoForm.title.value,
                    description: todoForm.description.value,
                    price: todoForm.price.value,
                    imgUrl: todoForm.imgUrl.value
                }
                todoForm.title.value = ""
                todoForm.description.value = ""
                todoForm.price.value = ""
                todoForm.imgUrl.value = ""

                axios.post('https://api.vschool.io/msvoren/todo/', newTodo)
                .then(getData)
                .catch(error => console.log(error))
            })
        
               
                
        
 