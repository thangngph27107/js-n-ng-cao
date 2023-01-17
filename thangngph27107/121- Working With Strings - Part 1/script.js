const airline = 'TAP air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B307'[0]);
console.log(airline.length); console.log('B7370'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));



const checkMid = function (seat) {
   // Ghe B va E o giua
   const s = seat.slice(-1);
   if (s === 'B' || s === 'E')
      console.log('You got the middle seat');
   else console.log('You got lucky!!');
}
checkMid('11B');
checkMid('23C');
checkMid('3E');
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));



