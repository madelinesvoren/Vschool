//smallest to largest
const arr =[1, 3, 5, 2, 90, 20]

arr.sort(function(a, b){
    return a - b
})
 
  console.log(arr)
  
  //largest to smallest

  arr.reverse(function(a, b){
      return a - b
  })
console.log(arr)

//shortest string to longest string

const wordsArr = ["dog", "wolf", "by", "family", "eaten"]

wordsArr.sort(function lengthSort(a, b) {
    return a.length - b.length
  })
  
  console.log(wordsArr)
  
//alphabetically

const wordsArr2 = ["dog", "wolf", "by", "family", "eaten"]

  wordsArr2.sort()
  console.log(wordsArr2)

//by age

const newArr = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
newArr.sort(function byAge(a, b){
    return a.age - b.age
  })
  
  console.log(newArr)
  