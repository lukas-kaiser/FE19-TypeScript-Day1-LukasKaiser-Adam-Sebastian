class Person {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle:string;

    constructor (firstName : string, lastName : string, age : number, jobTitle : string ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printInfo() : string {
        return `Hello there, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old, and I am a ${this.jobTitle}`;     
    }
}

let person1 = new Person("Hans", "Hansmann", 44, "Hansestadt Mayor");
let person2 = new Person("Peter", "Peterson", 32, "Petery Owner");

console.log(person1.printInfo());
console.log(person2.printInfo());

class People extends Person{
    salary: number;
    location: string;

    constructor (firstName : string, lastName : string, age : number, jobTitle : string, salary : number, location : string ){
        super(firstName, lastName, age, jobTitle);
        this.salary = salary;
        this.location = location;
    }
    printMoreInfo() : string {
        return this.printInfo() + `and I get ${this.salary} every month, and I work in ${this.location}`;
    }
}

let people1 = new People("Fred", "Fredder", 33, "Fredwood Forester", 24000, "Fredland");
console.log(people1.printMoreInfo());