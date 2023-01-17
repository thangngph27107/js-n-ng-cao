'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Agelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegatarian',
'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary]= restaurant.categories;
console.log(main, secondary);


[main, secondary]= [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [i, ,j] = nested;
const [i, ,[j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1]= [8, 9];
console.log(p, q, r);