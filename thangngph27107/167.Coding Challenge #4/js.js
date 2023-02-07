///////////////////////////////////////////////
// Coding challenge #4

/*
Julia and Kate are still studying dogs, and this tima
they are stydying if dogs are eating too much or too
little
Earting too much means the dogs current food portion
is larger than the recommended portion, and eating
too little is the opposite.
Eating an okay amount means the dogs current food 
portion is within a range 10% above and 10% below the
recommended portion (see hint)

1. loop over the array containing dog objects, and 
for each dog, calculate the recommentded food portion
and add it to the object as a new property. Do NOT
create a new array, simply loop over the array 
Formula: recommendedFood = weight ** 0.75 * 28. (the
    result is in grams of food, and the weight needs to
    be in kg)
2. Find Sarah's dog and log to the console whether 
it's eating too much or too much or too littel HINT: Some 
dogs have multiple owners, so you first need to first  Sarah
in the owner array, and so this one is a bit tricky 
(on purpose)
3. Create an array containing all owner of dogs who 
eat too much ('ownersEatTooMuch') and an array with
all owners of dog who eat too litle 
('ownersEatTooMuch')
4. Log a string to the console for each araay created 
in 3 like this: Matilda and Alice and Bob's Dogs 
eat too much and Sarah and John and Michael's dogs
eat too little
*/

const dogs = [{
        weight: 22,
        curFood: 250,
        owners: ['Alice',
            'Bod'
        ]
    },
    {
        weight: 8,
        curFood: 200,
        owners: ['Matilda']
    },
    {
        weight: 13,
        curFood: 275,
        owners: ['Sarah', 'John']
    },
    {
        weight: 32,
        curFood: 340,
        owners: ['Michael']
    },

];

// 1 
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'litle'}`);

// 3 
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

// 4
// "Matilda and Alice and Bob's dogs eat too much!";
// "Sarah and John and Michael's dogs eat too littel";

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too littel!`);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6
// current > (recommended * 0.90) && current < (recommended * 1.10)

const checkEatingOkay = dog =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood <
    dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7
console.log(dogs.filter(checkEatingOkay));

// 8
// sort it by recommended food portion in an ascending order [1, 2, 3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);