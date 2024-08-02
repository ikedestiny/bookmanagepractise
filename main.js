const myObje = {
    name: 'Destiny',
    age: 21,
    origin: 'Nigeria'
}

console.log(myObje.origin)

//obnject constructors
function Person(name, age){
this.name = name;
this.age = age;
}

//instantiation
const person1 = new Person("Destiny", 21);
console.log(person1.name+' is '+person1.age+' years old')