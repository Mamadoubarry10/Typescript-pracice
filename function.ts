function add(n1: number, n2: number): number{
    return n1 +n2
}

function printResult(num: number){
console.log("Result:" + num)
}


let combineValues: Function;

combineValues = add

console.log(combineValues(2, 2))
printResult(add(5, 5))