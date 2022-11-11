let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

console.log(sevenTimesTable.every((item => {return item % 7 == 0})));

console.log(seventySevenTimesTable.every((item => {return item % 77 == 0})));

console.log(seventySevenTimesTable.find((item => {return item % 77 !== 0})));

console.log(seventySevenTimesTable.findIndex((item => {return item % 77 !== 0})));