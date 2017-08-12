let add = (n1, n2) => n1 + n2;
let square = n => n*n;

var numbers = [2,5,7,9];

let squares = numbers.map( n => n*n );

console.log(add(2,5));
console.log(square(2));
console.log(squares);

var obj = {
    n: 10,
    lazyDouble:  function ()  {
        setTimeout(() => {
            console.log(this.n * 2);
        }, 2000);
    }
};

obj.lazyDouble();
