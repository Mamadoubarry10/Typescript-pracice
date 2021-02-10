type Combinable = number | string;

type User = {name: string, age: number}

function combine(input1: Combinable, input2: number | string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === "number"){
        result = input1 + input2
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine(24, 24))