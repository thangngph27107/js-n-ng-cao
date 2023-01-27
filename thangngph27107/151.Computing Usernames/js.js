displayMovements(account1.movements);

const calcPrintBalance = function(movements) {
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalence.textContent = `${balance} EUR`;
};

calcPrintBalance(account1.movements);

const createUsernames = function(accs) {
    accs.forEach(function(acc) {
        const username = user
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
        return username;
    });
};
createUsernames(accounts);
console.log(accounts);