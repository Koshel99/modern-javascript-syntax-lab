// CONCEPT 1

const flavors = ['vanilla', 'chocolate', 'strawberry'];

const iceCreamFlavors = flavors.map((flavor) => {
  return `${flavor} ice cream`;
});

console.log(iceCreamFlavors); 
// Prints: ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// ! Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):

const num = [13, 87, 2, 89, 12, 4, 90, 63];

// Your code here:

const numsTimesTwo = num.map((num)=> num * 2)

console.log(numsTimesTwo)

////////////////////////////////////////////////////////////

// CONCEPT 2

const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet);
// Prints: 'Rover'
console.log(secondPet);
// Prints: 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]);
// Prints: 'Rover'
console.log(petsArray[1]);
// Prints: 'Snuffles'

// ! Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract 
//    the first and second values and place them into variables. Name the 
//    variable that corresponds to the first value `firstIngredient`. Name the 
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here:

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
console.log(secondIngredient);

////////////////////////////////////////////////////////////

// CONCEPT 3

const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring:
  const { name, role } = person;
  
  console.log(name);
  // Prints: 'Alex'
  console.log(role);
  // Prints: 'Software Engineer'
  
  // Equivalent in traditional dot notation:
  console.log(person.name); 
  // Prints: 'Alex'
  console.log(person.role); 
  // Prints: 'Software Engineer'

// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):

const car = {
    make: 'Audi',
    model: 'Q5',
  };
  
  // Your code here:
  
  
const {make, model} = car;

console.log(make);
console.log(model);

////////////////////////////////////////////////////////////

// CONCEPT 4

const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); 
// Prints: [1, 2, 3]


duplicateArray.push(4); 
// Using spread created a *copy* of the `originalArray`
// Changing it doesn't also change `originalArray`

console.log(duplicateArray); 
// Prints: [1, 2, 3, 4]
console.log(originalArray); 
// Prints: [1, 2, 3]


const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); 
// Prints: ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']


// ! Exercise 4: 
// a. Duplicate the provided `morePizzaToppings` array using the spread 
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// 
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

const morePizzaToppings = ['Cheese', 'Sauce'];

// Your code here:


const uncontroversialPizzaToppings = [...morePizzaToppings];

uncontroversialPizzaToppings.push('Pineapple');

console.log(morePizzaToppings);
console.log(uncontroversialPizzaToppings);

////////////////////////////////////////////////////////////

// CONCEPT 5

const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  // Copy the properties of `originalObject`:
  const clonedObject = { ...originalObject };
  
  // Update the properties of `clonedObject`:
  clonedObject.foo = 'Goodbye';
  clonedObject.bar = 0;
  
  console.log('Original: ', originalObject);
  // Prints: { foo: 'Hello', bar: 100 }
  console.log('Clone: ', clonedObject);
  // Prints: { foo: 'Goodbye', bar: 0 }

// ! Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a 
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new 
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):

const anotherCar = {
    make: 'Toyota',
    model: 'RAV4',
  };
  
  // Your code here:
  
const myCar = {...anotherCar};

myCar.make ='Lexus'
myCar.model = 'A16'

console.log(anotherCar);
console.log(myCar);

////////////////////////////////////////////////////////////

// CONCEPT 6

const fruitInventorys = {
    apples: 2,
    oranges: 4,
  };
  
  const selectedFruit = 'apples';
  // Using the `selectedFruit` variable as a dynamic key:
  const selectedFruitCount = fruitInventorys[selectedFruit];
  
  console.log(selectedFruitCount);
  // Prints: 2

  const fruitType = 'bananas';

  // Using the `fruitType` variable as a dynamic key:
  const fruitInventory = {
    [fruitType]: 5,
  };
  
  console.log(fruitInventory); 
  // Prints: { bananas: 5 }

// ! Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like 
//    'username', 'age', or 'email') to it.
// 
// b. Create an object named `userProfile`. 
// 
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a 
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:

const propertyName = 'Jade';

const userProfile ={
    [propertyName]: '8000'
};

console.log(propertyName);
console.log(userProfile);

////////////////////////////////////////////////////////////

// CONCEPT 7

// export const myNumber = 123;
// export const myString = 'Hello';

// export default function superCoolFunction() {
//     /* ... */
// }

// import { myNumber, myString } from './myData.js';

// import superCoolFunction from './superCoolFunction.js';

// import * as MyData from './myData.js';
// console.log(MyData.myNumber);
// console.log(MyData.myString);

