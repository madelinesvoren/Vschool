///////////////////////////  EX1  //////////////////////////////////

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => {
    return arr.map( name => {
        return { type: "carrot", name }
    })
}

console.log(mapVegetables(carrots))

/////////////////////////////  EX2  //////////////////////////////////

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr => {
    return arr.filter((person) => {
        return person.friendly
    })
})

console.log(filterForFriendly(people))

//////////////////////////////  EX3  //////////////////////////////////

const doMathSum = (a, b) => a + b

const produceProduct = (a, b) => a * b

//////////////////////////////  EX4  //////////////////////////////////

//Hi Kat Stark, how does it feel to be 40?

const firstName = "Jane"
const lastName = "Doe"
const age = 100

const greet = `Hi ${firstName} ${lastName}, how does it feel to be ${age} ?`
// function nameAndAge(){
//     return `Hi " + firstName + lastName, + "how does it feel to be" + age + "?`
// }
console.log(greet)

//////////////////////////////  EX5  /////////////////////////////////////

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr => arr.filter(animal => animal.type === "dog" ? true : false)) 

 console.log(filterForDogs)
 

 ////////////////////////////  EX6  //////////////////////////////////////

 const location = "Hawaii"
const name = "Janice"
const greeting = `Hi ${name}! Welcome to ${location}. I hope you enjoy your stay. please aske the president of ${location} if you need anything`

console.log(greeting)

////////////////////////////  PRACTICE  ///////////////////////////////////

//let name = "John"
//const age = 101

const runForLoop = (pets) => {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let petName;
        if (pets[i] === "cat") {
            petName = "fluffy"
        } else {
            petName = "spot"
        }
        console.log("pet name: ", petName)
        pet.name = petName
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])