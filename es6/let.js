let x = true;
let y;
if (x) {
    y = 10;
}
console.log(y);

for(let i=1; i<=5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 2000);
}

