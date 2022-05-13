//Return numbers 5 or greater
// const numbersArr = [3, 6, 8, 2]

// const fiveAndGreaterOnly = numbersArr.filter(function(num){
//     if(num >= 5){
//         return num
//     }
// })
// console.log(fiveAndGreaterOnly)

//Only even numbers
// const numbersArr2 = [3, 6, 8, 2]

// const evensOnly = numbersArr2.filter(function evensNumbers(num) {
//     if(num % 2 === 0)
//     return num
//   })

//   console.log(evensOnly)

  //Strings
//   const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]
  
//   const characters = strings.filter(function fiveCharactersOrFewerOnly(arr) {
//       if(arr.length <= 5){
//           return arr
//       }
//   })
  
//   console.log(characters)

  //People filter
  const people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }]

  const clubMembers = people.filter(function peopleWhoBelongToTheIlluminati(arr){
    if(arr.member === true){
        return arr.member
    }})

  console.log(clubMembers)

  //18 and older

  const peopleArr = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }]
  
  const peopleOver18 = peopleArr.filter(function ofAge(arr){
    if(arr.age > 18){
        return arr.name
    }})
  
  // test
  console.log(peopleOver18)
  