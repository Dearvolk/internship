// console.log("Hello world");

// let A = 0;
// {
// let A = 10;
// console.log(A);
// }
// console.log(A);

// function sum(a, b) {
//   return a + b;
// }
// let s1 = sum(1, 2);
// console.log(s1);

// let temp = 45;
// if (temp < 20) {
//   console.log("cold day");
// } else if (temp >= 20 && temp <= 30) {
//   console.log("moderate day");
// } else if (temp > 30) {
//   console.log("hot day");
// }

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits);
// console.log(fruits[1]);
// fruits.push("kiwi");
// fruits.unshift("mango");
// console.log(fruits);

// fruits.filter((e) => {
//   if (e.charAt(0) == "o") {
//     console.log(e);
//   }
// });
// console.log(fruits);
// fruits.map((e) => {
//   if (e.charAt(0) == "o") {
//     console.log(e);
//   }
// });
// console.log(fruits)

//Nested Objects:
// Array of three people
let people = [
    {
      name: 'Alice',
      age: 25,
      place: {
        city: 'Wonderland',
        country: 'Fairyland'
      }
    },
    {
      name: 'Bob',
      age: 30,
      place: {
        city: 'TechCity',
        country: 'Geekland'
      }
    },
    {
      name: 'Charlie',
      age: 28,
      place: {
        city: 'Artsville',
        country: 'Createland'
      }
    }
  ];

console.log(people[0])
console.log(people[1].name)
people[0].age = 29
people[1].place.city = 'TechnoCity';
console.log(people[1])
console.log(people[0])