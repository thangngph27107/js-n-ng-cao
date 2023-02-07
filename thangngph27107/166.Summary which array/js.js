/////////////////////////
// Array Method Praction 

//1
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

//2
// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .fields(mov => mov >= 1000).length;

const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    // .reduce((count, cur) => (cur >= 1000 ? count + 1 :
    //    count), 0);
    .reduce((count, cur) => (cur >= 1000 ? ++count :
        count), 0);

//console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000));
console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
console.log(a++);
console.log(a);

//3 
const { deposits, withdrawals } = accounts
    .flatMap(acc => acc.movements)
    .reduce(
        (sums, cur) => {
            //cur > 0 ? (sum.deposits += cur) : (sums.withdrawals += cur);
            sums[cur > 0 ? 'deposit' : 'withdrawal'] +=
                cur;
            return sums;
        }, { deposits: 0, withdrawals: 0 }
    );

console.log(deposits, withdrawals);

// 4
// this is a nice title -> this is a nice title
const convertTitleCase = function(title) {
    const capitzalize = str => str[0].toLowerCase() +
        str.slice(1);

    const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word =>
            (expections.includes(word) ? word :
                capitzalize(word)))
        .join(' ');

    return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXMAPLE'))