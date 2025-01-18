function add(number1: number, number2: number): number {
    return number1 + number2;
}
console.log("Additon uding function keyword", add(1, 2));

// Arrow function
const sum = (number1: number, number2: number): number => {
    return number1 + number2;
}
console.log("Additon using arrow function", sum(1, 2));

// LAst way
const sub = function (number1: number, number2: number): number {
    return number1 - number2;
}
console.log("Substraction using function keyword assigned to variable", sub(1, 2));


// use of optional parameters
function addThree(number1: number, number2: number, number3?: number): number {
    return number3 ? number1 + number2 + number3 : number1 + number2;
}
console.log("Additon using optional parameter assigned", addThree(1, 2, 3));
console.log("Additon using optional parameter", addThree(1, 2));


// rest parameters
function add2(number1: number, number2: number, ...numbers: number[]): number {
    return number1 + number2 + numbers.reduce((acc, val) => acc + val, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log("Additon using rest parameter", add2(1, 2, ...numbers));