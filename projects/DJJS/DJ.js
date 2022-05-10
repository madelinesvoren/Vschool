var block = document.getElementById("square")
console.log(block)

block.addEventListener("mouseenter", () => {
    block.style.backgroundColor = "blue"   
})

block.addEventListener("mousedown", () => {
        block.style.backgroundColor = "red"
    })

block.addEventListener("mouseup", () => {
    block.style.backgroundColor = "yellow"
})

block.addEventListener("dblclick", () =>{
    block.style.backgroundColor = "green"
})

document.addEventListener("wheel", () =>{
    block.style.backgroundColor = "orange"
})

block.addEventListener("keydown", function keys(){
    console.log(keydown.r);
    block.style.backgroundColor = "red"
})