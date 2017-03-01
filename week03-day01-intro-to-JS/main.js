console.log('in main.js');
var o = {};
var s = '';
var b = true;
var n = 1;
var a = [];
console.log('--- Using "typeof" operator:');
console.log(typeof o);
console.log(typeof s);
console.log(typeof b);
console.log(typeof n);
console.log(typeof a);

console.log('--- Playing with different types:');
var numberAsString = '5';
var number1 = 3;
var number2 = 7;
console.log(numberAsString + number1);
console.log(typeof (numberAsString + number1));
console.log(number1 + numberAsString);
console.log(typeof (number1 + numberAsString));
console.log(number1 + number2);
console.log('Harry' + 'Potter');
console.log('Harry' - 'Potter');
console.log(parseInt(numberAsString));
console.log(parseInt(numberAsString) + number1 + number2);
console.log(parseInt(3.1415927));
console.log(parseInt('3.1415927'));
console.log(parseInt(3.56));
console.log(parseFloat(3.1415927));
console.log(parseFloat('3.1415927'));
console.log(parseFloat(3.56));
console.log(parseFloat('blah'));

console.log('--- Control flow:');
var moneyInPocket = 20;

if (moneyInPocket > 10) {
  console.log('Another drink please!');
} else if (moneyInPocket > 5) {
  console.log('Make mine a half then');
} else {
  console.log('Time to go home');
}

var countryOfOrigin = 'Kenya';
var greeting = '';

switch(countryOfOrigin) {
  case 'France':
    greeting = 'Bonjour';
    break;
  case 'Spain':
    greeting = '¡Hola!';
    break;
  case 'Indonesia':
    greeting = 'Selamat sore';
    break;
  case 'Kenya':
    greeting = 'Jambo!';
    break;
  default:
    greeting = 'Well hello there';
    break;
}
console.log(greeting);

var dayOfWeek = 'Thursday';
// logical AND
if (dayOfWeek.toUpperCase() === 'THURSDAY' || dayOfWeek.toUpperCase() === 'FRIDAY') {
  console.log('Pub thisarvo!');
} else {
  console.log('Bummer :-(');
}

// useful way of debugging
console.log('---truthy/falsey:');
var truthythings=[1,0,'something', '',-1,[], null, NaN, 'false','0'];

for (var i = 0 ; i < truthythings.length; i++) {
  console.log('  element', i, 'is:', truthythings[i])
if  (truthythings[i]) {
  console.log(' ',truthythings[i], '---> truthy');
} else {
  console.log(' ',truthythings[i], '----> falsey');
}
}
// 0, empty string, null an undefined is counted as falsey




var yourName = prompt('What is your name?');

if (yourName) {
  alert('Nice one, ' + yourName);
} else {
  alert('Not sure what your name is!');
}

console.log('--- Loops:');
var question = 'Now using a while() loop. What is your name?';
yourName = prompt(question);
while (!yourName) {
  alert('Not sure what your name is!');
  yourName = prompt(question);
}
alert('Nice one, ' + yourName);

do {
  yourName = prompt('Now using a do/while() loop. What is your name?');
  if (!yourName) {
    alert('Not sure what your name is!');
  }
} while (!yourName);
alert('Nice one, ' + yourName);
