var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(number1, number2) {
    return number1 + number2;
}
console.log("Additon uding function keyword", add(1, 2));
// Arrow function
var sum = function (number1, number2) {
    return number1 + number2;
};
console.log("Additon using arrow function", sum(1, 2));
// LAst way
var sub = function (number1, number2) {
    return number1 - number2;
};
console.log("Substraction using function keyword assigned to variable", sub(1, 2));
// use of optional parameters
function addThree(number1, number2, number3) {
    return number3 ? number1 + number2 + number3 : number1 + number2;
}
console.log("Additon using optional parameter assigned", addThree(1, 2, 3));
console.log("Additon using optional parameter", addThree(1, 2));
// rest parameters
function add2(number1, number2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    return number1 + number2 + numbers.reduce(function (acc, val) { return acc + val; }, 0);
}
var numbers = [1, 2, 3, 4, 5];
console.log("Additon using rest parameter", add2.apply(void 0, __spreadArray([1, 2], numbers, false)));
