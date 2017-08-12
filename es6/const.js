//'use strict';

const name = 'Sam';
//name = 'David';

const person = Object.freeze({name: 'Sam'});

//person = {name: 'David'};
person.name = 'David';
console.log(person);