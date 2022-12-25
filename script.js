/////////////////////////////////////////////////
// Notes with Dates, numbers Int etc.

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23', 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// // funkcja z losowanaiem wybranych liczb
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// //0...1 -> 0...(max-min)-> min...max

// console.log(randomInt(8, 110));

// // Rounding Int
// console.log(Math.trunc(23.3));
// console.log(Math.trunc(23.8));
// console.log('//////');
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.8));
// console.log('//////');

// console.log(Math.floor(-23.3));
// console.log(Math.trunc(-23.3));
// console.log('//////');

// console.log(Math.round(23.3));
// console.log(Math.round(23.8));
// console.log('//////');
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.8));
// console.log('//////');
// console.log(Math.round(23.3));
// console.log(Math.round(23.8));
// console.log('//////');

// console.log(Math.round('23.3')); //też zadziała
// console.log(Math.round('23.8'));

// // Rounding decimals
// console.log((2.7).toFixed(0)); //zwraca string, okrągla ilość liczb po przecinku - tutaj to 0,
// console.log(+(2.7).toFixed(3));
// console.log(+(2.345).toFixed(1)); //2.35

// // ////////////////////////////////////////////////////

// //Remainder operator:
// console.log(5 % 2);

// console.log(5 / 2);

// console.log(8 % 3);
// // Używa się dla sprawdzenia parzystych / nieparzystych liczb

// console.log(6 % 2); // 0  - parzyste
// console.log(9 % 2); //> 0 nieparzyste(ma końcówkę z dzielenia)

// const isEven = n => n % 2 === 0;

// console.log(isEven(8));

// console.log(isEven(23));

// console.log(isEven(51));

// labelBalance.addEventListener('click', () => {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });
// // Jeśli potrzebujemy żyć czegoś N ilość razy, to używany tego
// // ////////////////////////////////////////////////////
// // Numeric Separators  (_)

// // 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);

// const priceCents = 345_99;
// console.log(priceCents);

// const transferFee = 15_00;

// const transferFee2 = 1_500;

// const PI = 3.14_15;
// console.log(PI);

// console.log(Number('23000'));
// console.log(Number('23_000')); //NaN
// console.log(parseInt('23_000')); //23

/////////////////////////////////////////////////

// BANKIST APP

/////////////////////////////////////////////////
// Data 1st
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Data 2nd
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = (movements, sort = false) => {
  containerMovements.innerHTML = '';

  // implementing sorting
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
       ${i + 1} ${type}
      </div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcAndDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes.toFixed(2))}€`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUserNames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
/////////////////////////////////////////////////

const updateUI = acc => {
  // Display movements
  displayMovements(acc.movements);

  // display balance
  calcAndDisplayBalance(acc);

  // display summary
  calcDisplaySummary(acc);
};

let currentAccount;

const clearInputFields = () => {
  // Clear input fields
  labelWelcome.textContent = 'Log in to get started';
  inputLoginPin.value = inputLoginUsername.value = '';
  inputLoginPin.blur();
  containerApp.style.opacity = '0';
};

btnLogin.addEventListener('click', e => {
  // prevent form from submiting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    clearInputFields();
    console.log(currentAccount.owner);
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Clear input fields

    containerApp.style.opacity = '100';
    // Update UI
    updateUI(currentAccount);
  } else {
    // Clear input fields
    clearInputFields();
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const amount = ++inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    alert(
      `${currentAccount.owner}! Your loan request is bigger than you can get. Please try again with a smaller amount`
    );
  }

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = '0';
    console.log(accounts);
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// /////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// BigInt

console.log(2 ** 53 - 1); //największa liczba, którą JS może przedstawić(64 bita, ale 53 używane dla przechowywania liczb(-1 bo zaczyna się od zera))
//9007199254740991 - ważna liczba, jest przechowywana w Number.MAX_SAVE_INTEGER

console.log(Number.MAX_SAFE_INTEGER);
// jeśli będziemy pracować z liczbami większymi za tę, to możemy wejść w błąd

// console.log(456654564684163846541684168466868); - nie można

console.log(456654564684163846541684168466868n); //BigInt

// Operations
console.log(10000n + 10000n); //20000n
console.log(6541654658436514681452n * 3313151365n);
// console.log(Math.sqrt(16n)); //Cannot convert a BigInt value to a number at Math.sqrt

const huge = 222222222254666666666n;
const num = 23;
// console.log(huge*num) - nie pożna połączyć INT ze zwykłą liczbą
console.log(huge * BigInt(num)); //It works

// Exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false - różne primitive types
console.log(typeof 20n); //bigint
console.log(20n == 20); //true

console.log(huge + ' ' + 'is REALLY big'); //konwertuje "huge" na string

// Divitiond
console.log(10n / 3n); //3n - zwraca najbliższą liczbę, zaokrągla do całej liczby
