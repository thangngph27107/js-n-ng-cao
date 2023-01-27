//////////////////////
// Coding Challenge 

/*
Let's go back to Julia and Kate's study about dogs.
This time, they want to convert dog ages to human 
ages and calculate the average age of the dogs in
their study.

Create a function 'calcAverageHumanAge', which 
accepts an array of dog's age ('ages'), and does 
the following things in order:

1.Calculate the dog age in human year using the 
following formula: if the dog is <= 2 years old,
humanAge = 2 * dogAge. if the dog is > 2 years old 
humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years 
old ( which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 
(you should already know from other challenge how we
    calculate averages)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK
*/

const calcAverageHumanAge = function(ages) {
    const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAge.filter(age => age >= 18);
    console.log(humanAge);
    console.log(adults);

    const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length,
        0
    );

    return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);