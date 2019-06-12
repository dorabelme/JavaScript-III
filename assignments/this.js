/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.


*In order to discover what 'this' points to, we have to understand the context, where the function is being called. The keyword is where.
 
* 1. Window/ Global Object Binding -> When this is used in the global scope, tha value of "this" is the window/console object.
* 2. Implicit Binding -> When a function is invoked by a preceding dot, the object to the left (before the dot) is 'this'.
* 3. New binding -> When we use a constructor function, this refers to the instance of that object that is created and returned 
    by the constructor function. New keyword is really important.
* 4. Explicit Binding -> Occurs when .call() or .apply() method is used. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
printThis = function() {
  console.log(this);
};

printThis();
// Prints the Window Object

// Principle 2
// code example for Implicit Binding
const myObject = {
  greet: "Hey",
  mood: "How are you today?",
  sayHey: function(name) {
    console.log(`${this.greet} ${name}! ${this.mood}`);
  }
};

myObject.sayHey("Henry");

// Principle 3
// code example for New Binding
function Person(attributes) {
  this.name = attributes.name;
  this.school = attributes.school;
  this.favMovie = attributes.favMovie;
  this.favBook = attributes.favBook;
}

const dora = new Person({
  name: "Dora",
  school: "Lambda School",
  favMovie: "Interstellar",
  favBook: "Homo Deus"
});

console.log(dora);

// Principle 4
// code example for Explicit Binding
const newObject = {
  name: "Dora",
  city: "New York City",
  favFood: "Pizza"
};

const thingsILike = ["Dancing", "Yoga", "Reading", "Eating", "Movies", "Music"];

function intro(thing1, thing2, thing3, thing4, thing5, ...other) {
  return `Hi! My name is ${this.name}. I live in ${
    this.city
  }, and I like ${thing1}, ${thing2}, ${thing3}, ${thing4}, ${thing5}, and ${
    other[0]
  }. 
  I love to eat ${this.favFood}.`;
}

console.log(intro.apply(newObject, thingsILike));
