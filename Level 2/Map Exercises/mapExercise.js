//Doubling numbers

const numbersArr = [2, 5, 100]

const result = numbersArr.map(function(multiply){
    return multiply * 2
  })

console.log(result)

//Making array of numbers into a string

const result2 = result.map(function stringItUp(item){
    return item.toString();
    

  })
  
  console.log(result2)
  
//Cap first letter lowercase the rest

let namesArr = ["john", "JACOB", "jinGleHeimer", "schmidt"]

namesArr = namesArr.map((str, i ) => str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()) 
console.log(namesArr)


  