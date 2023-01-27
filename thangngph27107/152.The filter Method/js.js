const deposits = movements.filter(function(mov1) {
    return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements)
    if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);


const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);