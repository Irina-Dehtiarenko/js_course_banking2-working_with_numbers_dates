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

////////////////////////////////////////////////////////
// BigInt

// console.log(2 ** 53 - 1); //największa liczba, którą JS może przedstawić(64 bita, ale 53 używane dla przechowywania liczb(-1 bo zaczyna się od zera))
// //9007199254740991 - ważna liczba, jest przechowywana w Number.MAX_SAVE_INTEGER

// console.log(Number.MAX_SAFE_INTEGER);
// // jeśli będziemy pracować z liczbami większymi za tę, to możemy wejść w błąd

// // console.log(456654564684163846541684168466868); - nie można

// console.log(456654564684163846541684168466868n); //BigInt

// // Operations
// console.log(10000n + 10000n); //20000n
// console.log(6541654658436514681452n * 3313151365n);
// // console.log(Math.sqrt(16n)); //Cannot convert a BigInt value to a number at Math.sqrt

// const huge = 222222222254666666666n;
// const num = 23;
// // console.log(huge*num) - nie pożna połączyć INT ze zwykłą liczbą
// console.log(huge * BigInt(num)); //It works

// // Exceptions
// console.log(20n > 15); //true
// console.log(20n === 20); //false - różne primitive types
// console.log(typeof 20n); //bigint
// console.log(20n == 20); //true

// console.log(huge + ' ' + 'is REALLY big'); //konwertuje "huge" na string

// // Divitiond
// console.log(10n / 3n); //3n - zwraca najbliższą liczbę, zaokrągla do całej liczby

///////////////////////////////////////////////////////

// //Creating dates

// // Create a date
// // 1.
// const now = new Date();
// console.log(now);
// // 2.
// console.log(new Date('Dec 25 2022 14:28:49')); //tworzy Date na podstawie czasu podanego w string

// console.log(new Date('December 24, 2015')); //Thu Dec 24 2015 00:00:00 GMT+0100 (czas środkowoeuropejski standardowy)

// console.log(account1);
// console.log(new Date('2019-11-18T21:31:17.178Z')); //Mon Nov 18 2019 22:31:17 GMT+0100 (czas środkowoeuropejski standardowy), to Z na końcu znaczy UTC
// console.log(new Date(account1.movementsDates[0])); // to samo

// // 3.
// console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT+0100 (czas środkowoeuropejski standardowy)
// // Czyli new Date(rok, miesiąc(JS liczy od zera 0 - January), dzień, godzina, minuty, sekundy )

// console.log(new Date(2037, 10, 31, 15, 23, 5)); //Tue Dec 01 2037 15:23:05 GMT+0100 (czas środkowoeuropejski standardowy)  - dlatego,że November ma 30dni, znaczy 31 === 1 December

// // 4.
// console.log(new Date(0)); //Thu Jan 01 1970 01:00:00 GMT+0100 (czas środkowoeuropejski standardowy) - jakiś typu czas początkowy
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //trzeci dzień od początku - convertingdate to milisecunds(3dni* 24godziny *60min *60sec*1000milisec) : Sun Jan 04 1970 01:00:00 GMT+0100 (czas środkowoeuropejski standardowy)

// // Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); //2037
// console.log(future.getMonth());
// console.log(future.getDate()); //dzień
// console.log(future.getDay()); //dzień tygodnia(3)
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// console.log(future.toISOString()); //zwraca string w formacie ISO:  2037-11-19T14:23:00.000Z

// console.log(future.getTime()); //2142253380000

// console.log(new Date(2142253380000)); //Thu Nov 19 2037 15:23:00 GMT+0100 (czas środkowoeuropejski standardowy)

// console.log(Date.now()); //currently date w milisekundach
// console.log(new Date(Date.now())); //Sun Dec 25 2022 14:56:36 GMT+0100 (czas środkowoeuropejski standardowy)

// future.setFullYear(2040); //zmienia obecny rok
// console.log(future); //Mon Nov 19 2040 15:23:00 GMT+0100 (czas środkowoeuropejski standardowy)
// future.setMonth(5);
// console.log(future); //Tue Jun 19 2040 15:23:00 GMT+0200 (czas środkowoeuropejski letni)

// // ////////////////////////////////////////////////////
// Operations with dates

// const future = new Date(2027, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1);
// const days2 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days2);

// Internationalizing numbers
// const num = 3698456.23;

// const options = {
//   style: 'currency', //percent//unit
//   unit: 'celsius', //mile-per-hour
//   currency: 'EUR', //"UAH"
//   // useGrouping:false
// };

// console.log('US', new Intl.NumberFormat('en-US', options).format(num)); //US //€//3,698,456.23 mph
// console.log('Ukraine', new Intl.NumberFormat('uk-UA', options).format(num)); //Ukraine 3 698 456,23 EUR//°C// милі/год
// console.log('German', new Intl.NumberFormat('de-DE', options).format(num)); //German 3.698.456,23 €//°C // mi/h
// console.log('Syria   ', new Intl.NumberFormat('ar-SY', options).format(num)); //Syria    ٣٬٦٩٨٬٤٥٦٫٢٣ ميل/س

// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// ); //pl-PL 3 698 456,23 C //mili/h

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
    '2022-12-20T17:01:17.194Z',
    '2022-12-24T23:36:17.929Z',
    '2022-12-25T10:51:36.790Z',
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

const formatMovementDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = (acc, sort = false) => {
  containerMovements.innerHTML = '';

  // implementing sorting
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
       ${i + 1} ${type}
      </div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcAndDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(outcomes, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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
  displayMovements(acc);

  // display balance
  calcAndDisplayBalance(acc);

  // display summary
  calcDisplaySummary(acc);
};

let currentAccount;

// FAKE ALWAYS LOGGED IN

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = '1';
labelWelcome.textContent = `Welcome back, ${
  currentAccount.owner.split(' ')[0]
}`;

// day/month/year

// As of Wednesday, 28 December 2022 at 17:29

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

    // Create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Experimenting Api
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', //"long", "2-digit"
      year: 'numeric', //'2-digit
      weekday: 'long', //nazwa dnia tygodnia
    };

    // Ustawienie języka za pomocą domyślnego języka:

    // const locale = navigator.language;
    // console.log(locale);

    // labelDate.textContent = new Intl.DateTimeFormat('uk-UA').format(now);
    // labelDate.textContent = new Intl.DateTimeFormat('pl-PL').format(now);
    // labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);
    // labelDate.textContent = new Intl.DateTimeFormat('ar-SY').format(now);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

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

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
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
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// //////////////////////////////////////////////////////////////
///////////////////////////////////
//
///////////////////////////////////
// Timers

// SetTimeout
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log('Here is your pizza' + ` ${ing2} ${ing1}`),
  3000,
  ...ingredients
);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// SetInterwal
// My first solution:

// setInterval(() => {
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);

// My second solution

setInterval(() => {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const time = new Intl.DateTimeFormat(currentAccount.locale, options).format(
    now
  );
  console.log(time);
}, 1000);
