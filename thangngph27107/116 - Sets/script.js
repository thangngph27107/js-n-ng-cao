'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, //Open 24 hours
        close: 24,
    },
};


const restaurant = {
    name: 'Classion Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    // ES6 enhanced object literals
    openingHours,
    


    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu
            [starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
console.log(ordersSet);

console.log(new Set('jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtman').size);




const game = {
    team1: 'Bayern Munich',
    team2: "Borrussia Dortmund",
    players:
        [
            [
                'Neuer',
                'Pavard',
                'Martinez',
                'Alaba',
                'Davies',
                'Kimmich',
                'Goretzka',
                'Coman',
                'Muller',
                'Gnarby',
                'Lewandowski',
            ],
            [
                'Burki',
                'Schulz',
                'Hummels',
                'Alanji',
                'Hakimi',
                'Weigl',
                'Witsel',
                'Hazard',
                'Brandt',
                'Sancho',
                'Gotze',
            ],
        ],
        score: '4:0',
        scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
        date: 'Nov 9th, 2037',
        odds: {
            team1: 1.33,
            x: 3.25,
            team2: 6.5,
        },
};

