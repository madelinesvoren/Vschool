let additionResult = document.getElementById('addition-result')
let addButton = document.getElementById('add')

addButton.addEventListener('click', function(event) {
    event.preventDefault()

    let numberOne = parseInt(document.getElementById('number-one').value)
    let numberTwo = Number(document.getElementById('number-two').value)

    additionResult.textContent = numberOne + numberTwo

})

let subtractionResult = document.getElementById('subtraction-result')
let subButton = document.getElementById('sub')

subButton.addEventListener('click', function(event){
    event.preventDefault()

    let numberOne = parseInt(document.getElementById('number-one').value)
    let numberTwo = Number(document.getElementById('number-two').value)

    subtractionResult.textContent = (numberOne - numberTwo)
})

let multResult = document.getElementById('multiplication-result')
let multButton = document.getElementById('mult')

multButton.addEventListener('click', function(event){
    event.preventDefault()

    let numberOne = parseInt(documemt.getElementById('number-one').value)
    let numberTwo = Number(document.getElementById('number-two').value)

    multiplicationResult.textContent = numberOne * numberTwo
})

// function add(evt){
//     evt.preventDefault()

//     alert('ehllo')
//     // console.log(document.getElementById('number-one').value)

//     additionResult.textContent = document['number-one'].innerContent + document['number-two'].innerContent
// }









// let addButton = document.addition

// addButton.addEventListener("submit", function(event){
//     event.preventDefault()
//     const numberOne = form[number-one].value
//     const numberTwo = form[number-two].value

//     function add(numberOne, numberTwo){
//         return +numberOne + +numberTwo;
// }
// })