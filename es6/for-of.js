var fruits = ['Apple', 'Mango', 'Guava', 'Banana'];

// for(var i=0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

for(let f of fruits){
    console.log(f);
}

let person = {
    name: 'Sam', age: 21, address: 'Baner'
};

for(let key in person){
    console.log(key, person[key]);
}