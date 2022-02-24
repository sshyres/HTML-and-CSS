/*alert('Hello World');
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');*/


// variables: let and const
// primitive data types: String, Numbers, Boolean, null, undefined, Symbol

const name = 'John'; // can have single or double quotes
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;
console.log(typeof name);

//Concatenation
console.log('My name is '+ name + 'and I am '+ age);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const s = 'technology, computers, IT, code ';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(', ')); // creates array with value for each word

//Arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits[1]);
fruits[3]='grapes';
fruits.push('mangos'); // adds to last index
fruits.unshift('strawberries');//adds to first index
fruits.pop();//removes last index
console.log(Array.isArray(fruits)); // checks if array
console.log(fruits.indexOf('oranges'));

//Objects
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30;
  hobbies: ['music', 'movies', 'sports'],
  address:{
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const{firstName, lastName, address: {city}} = person;
console.log(city);

person.email = 'john@gmail.com';
//Arrays with objects
const todos = [
  {
  id: 1,
  text: 'Take out trash',
  isCompleted: true
  },
  {
  id: 2,
  text: 'Meeting with boss',
  isCompleted: true
  },
  {
  id: 3,
  text: 'Dentist appt',
  isCompleted: false
  },
];

console.log(todos[1].text); // prints "Meeting with boss"

const todoJSON = JSON.stringify(todos); // for sending data to a server
console.log(todoJSON);


// For loops
for(let i = 0; i < 10; i++){
  console.log(`For Loop Number: ${i}`);
}

// While loops
let i = 0;
while(i<10){
  console.log(`While Loop Number: ${i}`);
  i++;
}

for(let i = 0; i <todos.length; i++){
  console.log(todos[i].text);
}

for(let todo of todos)}{
  console.log(todo.text);
}


//forEach, map, filter
todos.forEach(function(todo){
  console.log(todo.text;)
});

const todoText = todos.map(function(todo){
  return todo.text; // returns new array of text
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;
}).map(function(todo){
  return todo.text;
})
console.log(todoCompleted); // returns array with completed tasks

// Conditionals
const x = 4;
const y = 10;

if(x >5 && y > 11){
  console.log('x is more than 5 or y is more than 10');
} 

if(x>5){
  if(y>10){
    console.log('true');
  }
}

const x = 10;
const color = x >10 ? 'red': 'blue'; // sets color to red if true and blue if false
switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is NOT red or blue');
    break;
}












  














































































    