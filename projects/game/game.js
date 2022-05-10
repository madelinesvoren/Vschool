const readlineSync = require('readline-sync');
    
    
    // if(selectOption === '1, 3'){
    //     var hasKey = false
        
    // } else if(selectOption === 2){
    //     var hasKey = true
    //     console.log('Good job. Now select another option.')
    //     if(selectOption === 3){
    //         console.log('You win!')
    //     } else{
    //         var hasKey = false
    //         console.log('You lose.')
    //     }
    // }
    
 let hasKey = false   
 let dead = false

while(!hasKey && !dead){
    var options = ['Put hand in hole', 'Find the key', 'Open door'];
    var selectOption = readlineSync.keyInSelect (options, 'Choose an option');
    if(selectOption === 0){
        dead = true
        console.log('You died.');
    } else if(selectOption === 1){
        hasKey = true
        console.log('Good job. Now what?');
    } else if(selectOption === 3)
        console.log('Nope.');
    }




