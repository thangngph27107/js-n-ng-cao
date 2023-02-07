btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    }
});

btnClose.addEventListener('click', function(e) {
    e.preventDefault();

    if(
        inputCloseUsername.value === currentAccount.username && 
        Number(inputClosePin.value) === currentAccount.pin
    ){
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        console.log(index);
        // .indexOf(23)

        // Delete account
        accounts.splice(index, 1);

        //Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e){
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted)
    sorted = !sorted;
});