const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

///fix captialization in name
const passenger = 'joNas';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const nomarlEmail = loginEmail.toLowerCase().trim();
console.log(nomarlEmail);
console.log(email === nomarlEmail);

//replacing
const priceGB = '278,97£';
const priceUS = priceGB.replace('£','$').replace( ',', '.' )  ;
console.log(priceUS);


const annoucment = 'All passenger come to boarding door 23. Boarding door 23';
console.log(annoucment.replace('door','gate'));
console.log(annoucment.replace(/door/g,'gate'));


//Booleans
const plane = "Airbus A320neo";
console.log(plane.includes('A320'));
console.log(plane.includes('Boing'));
console.log(plane.startsWith('Airb'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
   console.log('Part of the NEW ARibus family');
} 

// Practice
const checkBaggage = function(item){
const baggage = item.toLowerCase();
if(baggage.includes('knife') || baggage.includes('gun')){
   console.log('You are Not allowed on board');
}else{
   console.log('Welcome a board');
}
}
checkBaggage('I hava a laptop, some foof and a pocket Knife');
checkBaggage('Sock and Camera');
checkBaggage('Got some snacks and a gun for protection');