//1.

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = [...name]
        const person = {firstName, lastName}
        return person
    })
}

const populateNames = (["Frank Peterson", "Suzy Degual", "Liza Jones"])

console.log(populatePeople(populateNames))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

//2.

// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }
  
  /////////////////////////////////////////////////////

  
  function product(a, b, c, d, e) {
    let numbers = [a,b,c, d, e];
    
    return numbers.reduce((acc, number) => {acc * number;}, 1)
}
console.log(product())

//3.

// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }
//   console.log(unshift(1, 2, 3, 4, 5, [1, 2, 3], 934, 43))
//////////////////////

const unshift = (letters, ...array) => 
    [...array, ...letters]
  

//   const upshift = ["a", "b", "c", "d", "e"]

  console.log(unshift([1, 2, 3], "a", "b", "c"))