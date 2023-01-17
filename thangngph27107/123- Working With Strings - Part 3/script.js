console.log('a+very+nice+string' .split('+'));
console.log('Jonas Schedtmann'.split(' '));

const[firstName,lastName] = 'Jonas Schedtmann'.split(' ');
const newName = ['Mr.' , firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const captializeName = function(name){
const names= name.split(' ');
const namesUpper =[];
for (const n of names){
   namesUpper.push(n[0].toUpperCase()+ n.slice(1));
   // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
}
console.log(namesUpper.join(' '));
}
captializeName('jessica ann smith davis')
captializeName('jonas scheddtman')

//padding
const message = "Go to gate 23!";
console.log(message.padStart(20,"+").padEnd(30,'+'));
console.log('Jonas'.padStart(20,'+').padEnd(30,'+'));

const maskCreditCard = function(number){
   const str = number + '';
   const last= str.slice(-4);
   return last.padStart(str.length,'*');
}
console.log( maskCreditCard(45646546546545));
console.log( maskCreditCard(12333211421323654654));
console.log(maskCreditCard('12333211421323654654'));

//Repeat
const message2='Bad weather... All Depatrues Delayed....';
console.log(message2.repeat(5));

const plamesInline = function (n){
   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
plamesInline(5)
plamesInline(3)
plamesInline(12)