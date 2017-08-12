let fruits = ['Apple', 'Mango', 'Guava'];

// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];

let [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

let person = {name: 'Sam', age: 21};
let {name, age} = person;
console.log(name, age);