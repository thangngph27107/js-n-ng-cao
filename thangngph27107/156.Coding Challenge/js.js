/////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previours
challenge, but this time as an arrow
function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK
*/

const calcAverageHumanAge2 = function(ages) {
    const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adult = humanAge.filter(age => age >= 18);


    const average = adult.reduce(
        (acc, age, i, arr) => acc + age / arr.length, 
        0
    );


    return average;
};

const calcAverageHumanAge = ages =>
ages
.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
.filter(age => age >= 18)
.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  //adult.length

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);