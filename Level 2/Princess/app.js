const readline = require("readline-sync")
let playerName = ["Mario", "Luigi"]
let pickedName = readline.keyInSelect(playerName)
let status = ["Small", "Big", "Powered up", "Dead"]

class Player {
    constructor(name, totalCoins, status){
        this.name = pickedName;
        this.totalCoins = 0;
        this.status = status[0] ;
        this.hasStar = false          
    }

    setName(pickedName){
        this.name = pickedName
    }
    
    gotHit(){
        console.log("You got Hit")
        if(this.hasStar === true){
            console.log("the star saved you")
            this.hasStar = false
        }
        if(this.status === "Small"){
            this.status = status[3];
            
        } else if(this.status === "Big"){
            this.status = status[0];
            
        }else if (this.status === "Powered up"){
            this.status = status[1];
            
        }  
    }

    gotPowerup(){
        console.log("You got Powered Up")
        if(this.status === 'Small'){
            this.status = status[1];
            
        } else if(this.status === 'Big'){
            this.status = status[2];
            
        } else if(this.status === 'Powered Up'){
            this.hasStar = true;
            console.log("You got a star!")
        }
    }

    addCoin(){
        return this.totalCoins++;

    }
    
    print(){
        console.log(`Name: ${this.name}
        \nTotal Coins: ${this.totalCoins}
        \nStatus: ${this.status}
        \nStar: ${this.hasStar}`);
    }
}

function randomRange(min, max){
    return Math.floor(Math.random()* (max - min) + min)
}
    
    

function startGame(){
    const newPlayer = new Player(pickedName, 0, status)
    newPlayer.setName(playerName[pickedName])
    //newPlayer.addCoin(this.totalCoins) 
    const gameInterval = setInterval(()=> {
        
        let randomValue = randomRange(0, 3)
        if(randomValue === 0){
            newPlayer.gotHit()
        } else if(randomValue === 1){
            newPlayer.gotPowerup()
        } else if(randomValue === 2){
            newPlayer.addCoin()
        } if(newPlayer.status === "Dead"){
            clearInterval(gameInterval)
            console.log("You Died")
        }
        console.log(randomValue)
        newPlayer.print()

    }, 2000);
}

startGame()

