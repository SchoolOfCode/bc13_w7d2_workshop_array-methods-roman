let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let num3 = someNumbers.some((item) => {return item % 3 == 0});
let num5 = someNumbers.some((item) => {return item % 5 == 0});
let num60 = someNumbers.some((item) => {return item % 60 == 0});
let num90 = someNumbers.some((item) => {return item % 90 == 0});

console.log(num3, num5, num60, num90);
