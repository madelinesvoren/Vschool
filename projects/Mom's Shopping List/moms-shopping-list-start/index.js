const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const item = form.title.value

    form.title.value = ""

    const li = document.createElement('li')
    const div = document.createElement("div")
    const editButton = document.createElement("button")
    
    const deleteButton = document.createElement("button")

    deleteButton.addEventListener("click", (e)=>{
        console.log(e.target.parentElement)
        const deleteLi = e.target.parentElement
        document.getElementById("list").removeChild(deleteLi)
    })

    div.textContent = item
    editButton.textContent = "Edit"
    deleteButton.textContent = "X"
    li.append(div)
    li.append(editButton)
    li.append(deleteButton)

    document.getElementById("list").append(li)
})





