function exampleStuff(){   
    let exampleEmptyVar = null
    let exampleEmptyVar1 = undefined
    
    console.log("Hello from script")
    let message = "Hello from script"
    
    console.log(exampleEmptyVar, exampleEmptyVar1)
    
    console.log(`Hello ${message} `);
    
    world = "world"
    
    console.log("Hello" + world + "I'm Suraj")
    
    let fruit = [1,2,3,4,5]
    
    console.log("hello" + fruit)
    
    const someNewArray = new Array(10)
    
    console.log(someNewArray[1])
}

let pokemonTeam = [
    "pikachu",
    "squirtle",
    "charmander",
    "mew"
]

function logTheTeam() {
    sortedTeam = pokemonTeam.sort()

    // sortedTeam.forEach((pokemon, arrayIndex) => {
    //     console.log(pokemon + " is at index of " + arrayIndex)
    // });
    console.log(pokemonTeam.entries())
    for (const [index, pokemon] of sortedTeam.enteries){
        console.log()
    }
}

logTheTeam();

const logTheTeamAlternate = () => {
    if (pokemonTeam.length == "2")
}