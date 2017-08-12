interface Singer {
    instrument: string;
    sing: Function;
}

class Person  implements Singer{
    instrument: string;

    constructor(private firstName, 
        private lastName,
        public age
    ) {
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    intro() {
        console.log(`My name is ${this.fullName()}`)
    }

    sing() {
    }
}

let sam = new Person('Sam', 'Micheal', 21);
sam.intro();