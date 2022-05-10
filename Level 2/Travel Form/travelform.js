const form = document.travelerInfo

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    
    //const dest = form.destination.destinationOptions.value
    
    const fName = form.firstName.value
        //alert(fName)

    const lName = form.lastName.value
        //alert(lName)

    const age = form.age.value
        //alert(age)

    const genderSelect = form.gender.value
        //alert(genderSelect)

    // const dietPreference = form.food.value
    //     for(let i = 0; i <form.food.length; i++){
    //         console.log(form.food[i].checked)
    //     }
        //alert(dietPreference)

    alert(fName + lName + age + genderSelect)
  
})

