//1.

function returnFirst(items){
    const firstItem = items[0]; /*change this line to be es6*/
    return firstItem
}
//////////////////////////////////////////////

function returnFirst(items){
    const [firstItem] = items; 
    return firstItem
}

//2.

function parseSentence(){
    const {location, duration} = pSentence
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  const pSentence = {
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
    //const {location, duration} = parseSentence
  
  
    console.log(parseSentence())

 //3.

function combineFruit(fruit, sweets, vegetables){
    return{fruit, sweets, vegetables}
}
    
    console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))
         
//4.

function collectAnimals(...animals) {
    console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//5.

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

// returnFavorites(favoriteActivities)

/////////////////////////////////////////////////

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

let [first, second, third, fourth, fifth] = favoriteActivities

function returnFavorites(){
    
    return `My top three favorite activities are, ${first}, ${second}, and ${fifth}`
};

//returnFavorites(favoriteActivities)

console.log(returnFavorites())
