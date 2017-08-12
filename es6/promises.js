let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //assess students
        let grade = Math.floor(Math.random()*15);
        if(grade < 10)
            resolve(grade);
        else
            reject('Trainer was busy');
    }, 3000);
});

p.then((grade) => {
    if(grade > 5)
        console.log('promoting Neha');
    else
        console.log('demoting Neha');
}, (reason) => {
    console.log(reason);
});