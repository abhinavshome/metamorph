var Person = (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.intro = function () {
        console.log("My name is " + this.fullName());
    };
    return Person;
}());
var sam = new Person('Sam', 'Micheal', 21);
sam.intro();
