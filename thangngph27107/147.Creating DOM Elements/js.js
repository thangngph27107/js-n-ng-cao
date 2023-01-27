'use strict';

/////////////////////////////////////////
//////////////////////////////////////////
// BANKIST APP

//DATA
const account1 = {
    owner: 'jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interesRate: 1.2, //%
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interesRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -468],
    interesRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interesRate: 1,
    pin: 4444,
};

//Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labelSumOut = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.summary_value--interest');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login_btn');

const btnTransfer = document.querySelector('.form_btn--transfer');
const btnLoan = document.querySelector('.form_btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan--amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements) {
    containerMovements.innerHTML = '';
    //. textContent = 0

    movements.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements_row">
        <div class="movements_type movements_type--${type}">${i + 1} ${type}</div>
        <div class="movements_value">${mov}</div>
        </div>

        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements);

/////////////////////////////////////////
/////////////////////////////////////////
// LECTURE