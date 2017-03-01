console.log('in main.js');

var person1 = {
  firstName: 'Bob',
  lastName: 'le Plant',
  email: 'bob@spartaglobal.co',
  age: 12.5
};

var person2 = {
  firstName: 'Aretha',
  lastName: 'Franklin',
  email: 'ms.legend@example.com',
  age: 29
};

var person3 = {
  firstName: 'Joe',
  email: 4,
  hobbies: ['boxing', 'hitting']
};

var people = [ person1, person2, person3 ];
for (var i = 0; i < people.length ; i++ ) {
  console.log(people[i].firstName, people[i].age);
}


if ({} === {}) {
  console.log('yep that\'s right');
} else {
  console.log('That\'s not right');
}



//It's not right because {} is shorthand for new object so in this case we have two new different object.
//Everytime you put this {} it's a different new object

var p = {};
p.firstName = 'Fred',
p.lastName = 'Flinstone';

//Can add a new object like this but Matt wouldn't recommend it causes its less cleaner

//FUNCTION

console.log('---Functions');

function createPerson (firstName, lastName, email, age) {
  var newPerson = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    age: age,
    fullName: function() {
      return firstName + ' ' + lastName;
    }
  };

  return newPerson;
}
//Can only return it within the bracket it cannot go outside the newPerson curly brackets. That is called scope
//You can put it in a function within an object within a function.


var harald = createPerson('Harald','Kumar', 'h.kumar@example.com',15);
console.log('newPerson full name:', harald.fullName());
var tola = createPerson('Tola', 'Olaoke', 'tolaoka@spartaglobal.co', 21);
var asma = createPerson('Asma','Chaima', 'achaima@spartaglobal',21);

people = [harald, tola, asma ];
//should not include var because it's already been defined but it's going to overwrite what was previously in the people variable.

function isOldEnough (age) {
  return (age >= 18);
}

if (isOldEnough(harald.age)) {
  console.log('come in');
} else {
  console.log('come back when you\'re older');
}

// for (i = 0; i < people.length ; i++) {
// console.log(people[i].fullName()), (isOldEnough(people[i].age)) ? 'is old enough' : 'is NOT old enough');

//   if (isOldEnough(people[i].age)) {
//   console.log(people[i].fullName()), 'is old enough');
// } else {
//   console.log(people[i].fullName()), 'is NOT old enough');

//This is not very DRY because you are repeating yourself console.log(people[i].fullName()), 'is old enough');.
//You should use a Ternary operator. The above active code is preferred however even that it's not good practice to do it like this.
//We will be improving it as neither option is preferable
//Theres an error in the active code that I haven't figured it out.

//Bad practice to use Global variable. BEtter to have this function as self contained as possible.
//do not need to put in var i because again it has already been defined so you can just use i.


//OBJECT ORIENTATED PROGRAMMING (OOP)
//create an object that has methods in it


console.log('--- 00 Javascript:');


function Circle (radius) {
  this.radius = radius;
  // one way to write an instant method
  this.circumference = function () {
    return 2 * Circle.PI * this.radius;
  };
}
// in the () we want to give it a name that is indicative to its purpose


// In JS this is called a constructor function. Consttuctor is something that can be called with new.
// This implies to reader that I will be able to do new circle.
//Seems like it just says hey get me a new circle

//STATIC (OR CLASS) PROPErty variable:
Circle.PI = 22/7; //normally would use Math.PI, using this for demo purposes on statis variables

// Another way to write an instance method
// add it to the prototype
Circle.prototype.area = function () {
  return Circle.PI * this.radius * this.radius;
};

var coin = new Circle(1.2);
var plate = new Circle(7);
var circles = [coin, plate];
// I want a class called circle with class OOP use capital. On this class we want a:
//property: radius
//method: circumfrence , area

//Method is a function that can be called within circle. With Javascript you would refer to it as function in practice

for (i = 0; i < circles.length; i++) {
  console.log('Radius is:', circles[i].radius);
  console.log('Circumference is:', circles[i].circumference());
  console.log('Area is:', circles[i].area());
}

// INSTANT VARIABLE
//plate, coin, circle are referred to as instance properties.
// There are new values for everytime it is passed e.g. both circles have different radiuses.

// STATIC VARIABLE
//doesn't change


//Class: Circle//property:radiuses
//Methods: circumfrence, area
//Class property:PI
