// arrayMult
// arrayMult takes an array and a number
// it returns a new array where each element is the number in the original array multiplied by the passed in number.
// console.log(arrayMult([1, 2, 3], 2));//[2, 4, 6]
// console.log(arrayMult([2], 9));//[18]
// console.log(arrayMult([3, 4], 2));//[6, 8]

function arrayMult(array, num) {
    return array.map((ele) => ele * num);
}

console.log(arrayMult([1, 2, 3], 2));//[2, 4, 6]
console.log(arrayMult([2], 9));//[18]
console.log(arrayMult([3, 4], 2));//[6, 8]
console.log(arrayMult([4,5], 4)); // [16, 20]