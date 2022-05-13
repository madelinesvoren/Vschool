const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const sortedOfAge = peopleArray.filter(function(num){
    if(num.age > 18){
        return true
    }
})
 
 sortedOfAge.sort(function(a, b){
     return a.lastName.localeCompare(b.lastName)
 })

 //console.log(sortedOfAge)

 const result = sortedOfAge.reduce(function(final, name){
     final.push("<li>" + name.firstName + name.lastName + " is" + name.age + "</li>")
     return final
 }, [])

 console.log(result)