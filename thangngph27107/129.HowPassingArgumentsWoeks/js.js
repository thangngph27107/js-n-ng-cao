const flight = 'LH123';
const jonas = {
    name: 'jonas Schmedtman',
    passport: 24739479284,
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
};

//checkIn(flight, jonas);
//console.log(flight);
//console.log(jonas);

// Is the same as doing..
//const flightNum = flight;
//const passenger = jonas;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);