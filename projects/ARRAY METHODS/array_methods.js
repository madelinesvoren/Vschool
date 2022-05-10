var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

fruit.shift()
console.log(fruit) 

vegetables.pop()
console.log(vegetables)

var orangeIndex = fruit.indexOf('orange')
console.log(orangeIndex)

fruit.push("1")
console.log(fruit)

let length = vegetables.length;
console.log(length)

vegetables.push('3')
console.log(vegetables)

const food = fruit.concat(vegetables);
console.log(food)

food.splice(4, 2)
console.log(food)

food.reverse();
console.log(food)