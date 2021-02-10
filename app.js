function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result:" + num);
}
var combineValues;
combineValues = add;
console.log(combineValues(2, 2));
printResult(add(5, 5));
