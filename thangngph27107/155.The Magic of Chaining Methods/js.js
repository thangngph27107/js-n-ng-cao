//////////////////////
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
      .filter(mov => mov > 0)
      .map((mov, i, arr) => {
          console.log(arr);
          return mov * eurToUsd;
      })

      // .map(mov => mov * eurToUsd)
      .reduce((acc, mov) => acc + mov, 0);
    console.log(totalDepositsUSD);