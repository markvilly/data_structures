"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = "20:00",
    address = "",
    mainIndex = 1,
    starterIndex = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizzas: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// to switch from main to secondary.

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// USING DESTructing

[main, secondary] = [secondary, main];

console.log(main, secondary);

const [starter, mainnCoarse] = restaurant.order(2, 0);
console.log(starter, mainnCoarse);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;

console.log(i, j, k);

//Default values.

const [p, q, r = "not available"] = [3, 6];

console.log(p, q, r);

//DEstructuring Objects

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//DEfault Values.

const {
  menu = [],
  starterMenu: starters = [],
  openingHours: openhours,
} = restaurant;

console.log(menu, starters);

//Mutating variables
let u = 111;
let t = 999;

const obj = { u: 23, t: 7, c: 14 };

({ u, t } = obj);
console.log(u, t);

//NEsted Objects.
const {
  fri: { open: o, close: l },
} = openhours;

console.log(o, l);

restaurant.orderDelivery({
  address: "Baker street 5",
  mainIndex: 1,
  starterIndex: 0,
});

const arrn = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

//building a new array by expanding.

const newMenu = [...restaurant.mainMenu, "Gnocci"];

console.log(...newMenu);

// copy array

const mainCopy = [...restaurant.mainMenu];

console.log(...mainCopy);

const themenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(...themenu);

const str = "jonas";

const letters = [...str, " ", "Sr."];
console.log(...letters);

// const ingredients = [
//   prompt("let's make pasta! Ingredient1? "),
//   prompt("Ingredient 2? "),
//   prompt("ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

const newRestaurant = { foundIN: 1998, ...restaurant, founder: "Geiseppe" };
console.log(newRestaurant);

//use object COPY

const restaurantCopy = { ...restaurant };

restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//REST OPERATOR

const [e, w, ...other] = [1, 2, 3, 4, 5, 6];
console.log(...other);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(...otherFood);

// REST PARAMETER WITH OBJECTS.

const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

// REST parameter with functions.
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizzas("Mushrooms");

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const mergedArray = [...array1, ...array2];
console.log(mergedArray);

const splitting = function (str) {
  return [...str];
};

const result = splitting("Hello, world");

console.log(result);
