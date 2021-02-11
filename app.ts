let userInput: unknown;
let username: string
userInput = 5
userInput = 'Goat'

if(typeof userInput === "string"){
    username = userInput
}

function generrateErroe(message: string, code: number): never{
    throw{message: message, errorCode: code}
}

generrateErroe("an error occurred", 500)