#!/usr/bin/env node
const prompt = require("prompt-sync")({ sigint: true });

console.log('Welcome to THE AWESOME GAME!!\nReady to kick some ass??')
const username = prompt('Enter your name: ')

// define attributes of a player
const player = {
    name: username,
    HP: 100,
    Inventory: []
}

// define enemy HP
let enemyHP = 50

// define items that can be won
const inventoryItems = ['Sword', 'Armor', 'Boot', 'Horse', 'Shield', 'Gold bar',
                        'Magic stick', 'Quiver', 'Crossbow', 'Helmet', 'Spear',
                        'Hunting knife']

// Select a random move with 1/3 chance of being attacked
function getRandomMove() {
    const enemyAppear = Math.floor(Math.random() * 3)
    
    if (enemyAppear === 1) {
        return 'enemy'
    } else {
        return 'walk'
    }
}

// Get a random enemy
function getEnemy() {
    const enemies = ['The Slicer', 'The Reaper', 'Kimonda', 'Dark Ganon', 'Red Wolf', 
                    'The Night caller', 'Angel Slayer', 'Nashvile Psycho', 'Shivers',
                    'Crimson', 'Mutilator', 'The Executioner']
    const myEnemy = Math.floor(Math.random() * 12)
    return enemies[myEnemy]
}

// attacking enemy
function attackEnemy() {
    score = Math.floor(Math.random() * 2);
    if (score === 0) {
        // player scores a hit - damage enemy by a random val btwn 1 and 10
        enemyHP -= Math.floor(Math.random() * 10) + 1;
        if (enemyHP < 0) {
            enemyHP = 0
        }
        console.log(`Yeaaah!! You hit the enemy`);
        
    } else if (score === 1) {
        // enemy scores a hit - damage player by a random val btwn 1 and 10
        player.HP -= Math.floor(Math.random() * 10) + 1;
        if (player.HP < 0) {
            player.HP = 0
        }
        console.log(`Ouch!! The enemy hit you!`);
    }
}

function getRandomInventoryItem() {
    return inventoryItems[Math.floor(Math.random() * 12)]
}

function killOrBeKilled(enemy) {
    // player kills the enemy
    if (player.HP > 0 && enemyHP <= 0) {
        // give player a HP boost
        player.HP += 20
        if (player.HP > 100) {
            player.HP = 100         // make sure HP is capped btwn 0 - 100
        }
        // give them something from Inventory
        const itemWon = getRandomInventoryItem()
        player.Inventory.push(itemWon)
        // reset the enemy HP
        enemyHP = 50
        // print statement
        killerString = '\n------------------------------------------------------\n' +
                        'Hooraaah!!\n' +
                        `You killed ${enemy}\n` + 
                        `You won: HP boost and a ${itemWon}\n` +
                        `NEW HP: ${player.HP}\n` +
                        `INVENTORY: ${player.Inventory}\n` +
                        '\n------------------------------------------------------\n'

        console.log(killerString)
        
    } else if (player.HP <= 0 && enemyHP > 0) {
        deathString = '\n------------------------------------------------------\n' +
                       `You were killed by ${enemy}!!!\n` +
                       `THE END\n` +
                       '------------------------------------------------------'
        console.log(deathString)
        // end game
        process.exit()
    }
}

while (true) {
    let option = prompt('Enter "w" to walk or "p" to view your details: ')
    if (option == 'w') {
        console.log('Walking....')
        // get attacked by an enemy or not while walking (1/3 chance of attack)
        enemyOrNOEnemy = getRandomMove()

        //when a wild enemy appears, choose a random enemy from a list
        if (enemyOrNOEnemy === 'enemy') {
            // get a random enemy from a list of enemies
            const enemy = getEnemy()
            console.log(`An enemy appears: ${enemy}`)

            // re-issue prompt until user enters a valid entry
            options = ['a', 'r']
            let option = prompt('Enter "a" for attack, "r" for run: ')
            while (!options.includes(option)) {
                option = prompt('Enter "a" for attack, "r" for run: ')
            }
            
            if (option === 'a') {
                // choose to attack
                while (player.HP > 0 && enemyHP > 0) {
                    // keep attacking untill one dies
                    console.log('Attacking...')
                    attackEnemy()
                }
                killOrBeKilled(enemy)
            } else if (option === 'r') {
                // choose to run
                // when run there is 50% chance of escape
                console.log(`Running from ${enemy}...`)
                if (Math.floor(Math.random() * 2) === 1) {
                    // was able to escape
                    console.log(`Managed to escape from ${enemy}`)
                } else {
                    // didn't escape
                    console.log(`${enemy} caught up with you`)
                    while (player.HP > 0 && enemyHP > 0) {
                        // keep attacking until one dies
                        console.log('Attacking...')
                        attackEnemy()
                    }
                    killOrBeKilled(enemy)
                }
            }
        }
    } else if (option === 'p' || option === 'Print') {
        outputString =  '\n------------------------------------------------------' +
                        `\nPlayer Name: ${player.name}\n` +
                        `HP: ${player.HP}\n` +
                        `Inventory: ${player.Inventory}\n` +
                        '------------------------------------------------------\n'
        console.log(outputString)
    } 
}