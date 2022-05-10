
//Preliminary

//1.
for(var i = 0;  i <= 9; i++){
    console.log(i)
}

//2.
for(var i = 9; i >= 0; i--){
    console.log(i)
}

//3.
var fruit = ["banana", "orange", "apple", "kiwi"]

for(var i=0; i < fruit.length; i++){
    console.log(fruit[i])
}

//Bronze

//1.
var numbers = []
numbers.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')
console.log(numbers)

//2.
var numbersArr = []
for (var i = 0; i <= 100; i++)
    if(i % 2 === 0){
    console.log(i)
}

//3.
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
let x = fruit.filter((element, index) => {
    return index % 2 === 0;
})
console.log(x)

//Silver

//1.
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  for (var i = 0; i < peopleArray.length; i++){
      console.log(peopleArray[i].name)
  }
  
  //2.
const people = []
people.push(peopleArray[i].name)
console.log(people)
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
  