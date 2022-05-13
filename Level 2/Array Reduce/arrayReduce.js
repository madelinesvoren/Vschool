//array to total

const arr = [1, 2, 3]

const result1 = arr.reduce(function(final, total){
    final += total
    return final
})

 console.log(result1)
 
 //array to long string

 const arr2 = [1, 2, 3]

 const result2 = arr2.reduce(function(final, num){
     final.push.toString(num)
     return final
 }, [])

 console.log(result2)


 