// Event handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
    //Prevent form from submitting 
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.owner ===
        inputLoginUsername.value);
    console.log('currentAccount');

    if (currentAccount ?.pin === Number(inputLoginPin.value)) {
        //Display UI and Message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(' ')[0]
        }`;
        containerApp.style.opacity = 100;

        //Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        //display movemnets
        displayMovements(currentAccount.movements);

        //display balance
        calcPrintBalance(currentAccount.movements);

        //display summary
        calcPrintSummary(currentAccount.movements);
    }
});