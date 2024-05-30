import chalk from "chalk";
import inquirer from "inquirer";

// classes of player & opponent

class Player {
    name : string 
    fuel : number = 100;
    constructor (name :string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncreases(){
        this.fuel = 100
    }
}
class opponent {
    name : string ;
    fuel : number = 100;
    constructor (name : string){
        this.name = name ;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncreases(){
        this.fuel = 100
    }

}

// player & opponent selection

let player = await inquirer.prompt({

type :"input",
name :"name",
message :"Please Enter Your Name"
})
console.log(player.name)

let Opponent = await inquirer.prompt({
    type : "list",
    name :"select",
    message : "Select Your Opponent",
    choices : ["Skeleton" , "Assassin" , "Zombie"]
})
// gather data //
let p1 = new Player(player.name)
let o1 = new opponent (Opponent.select);
do{

    /////skeleton//////
    if (Opponent.select == "Skeleton"){
    let ask = await inquirer.prompt({
    type : "list",
    name :"opt",
    message : "Select Your Opponent",
    choices : ["Attack" , "Drink Portion" , "Run for your life....."],

    })
    if(ask.opt == "Attack"){
    let num = Math.floor( Math.random()*2)
    if(num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if(p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
            process.exit()
        }
    }
if (num <= 0){
    o1.fuelDecrease()
    console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
    console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
    if(o1.fuel <= 0){
        console.log(chalk.green.bold.italic("You win !!!"))
        process.exit()
    }
}
    }





    if(ask.opt == "Drink Portion"){

        p1.fuelIncreases()
        console.log(chalk.bold.italic.green(`you drinkhealth potion your fuel is ${p1.fuel}`))
}
    if(ask.opt == "Run for your life....."){
    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
    process.exit()
    }}


    ////assassin/////
    if (Opponent.select == "Assassin"){
        let ask = await inquirer.prompt({
        type : "list",
        name :"opt",
        message : "Select Your Opponent",
        choices : ["Attack" , "Drink Portion" , "Run for your life....."],
    
        })
        if(ask.opt == "Attack"){
        let num = Math.floor( Math.random()*2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
            if(p1.fuel <= 0){
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
                process.exit()
            }
        }
    if (num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        if(o1.fuel <= 0){
            console.log(chalk.green.bold.italic("You win !!!"))
            process.exit()
        }
    }
        }
    
    
    
    
    
        if(ask.opt == "Drink Portion"){
    
            p1.fuelIncreases()
            console.log(chalk.bold.italic.green(`you drinkhealth potion your fuel is ${p1.fuel}`))
    }
        if(ask.opt == "Run for your life....."){
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
        process.exit()
        }}

        ////zombie//////
        if (Opponent.select == "Zombie" ){
            let ask = await inquirer.prompt({
            type : "list",
            name :"opt",
            message : "Select Your Opponent",
            choices : ["Attack" , "Drink Portion" , "Run for your life....."],
        
            })
            if(ask.opt == "Attack"){
            let num = Math.floor( Math.random()*2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
                if(p1.fuel <= 0){
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
                    process.exit()
                }
            }
        if (num <= 0){
            o1.fuelDecrease()
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            if(o1.fuel <= 0){
                console.log(chalk.green.bold.italic("You win !!!"))
                process.exit()
            }
        }
            }
        
        
        
        
        
            if(ask.opt == "Drink Portion"){
        
                p1.fuelIncreases()
                console.log(chalk.bold.italic.green(`you drinkhealth potion your fuel is ${p1.fuel}`))
        }
            if(ask.opt == "Run for your life....."){
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
            process.exit()
            }}
}
while(true)
