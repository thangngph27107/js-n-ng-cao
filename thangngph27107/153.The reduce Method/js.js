console.log(movements);

// accumulator -> SNOWBALL
//const balance = movements.reduce(function(acc, cur, i, arr) {
//    console.log(`Iteration ${i}: ${acc}`);
//    return acc + cur;
//}, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value 
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0]);
console.log(max);