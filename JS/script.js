// function Person(name, age, school) {
//     this.name = name;
//     this.age = age;
//     this.school = school;
// }

// Person.prototype.greet = function() {
//     console.log("Welcome To the Prototype chain");
// }


// const p1 = new Person("faisal Khan", 22, "Delhi Public School");
// const p2 = new Person("Moin Khan", 20, "Delhi Public School");
// const p3 = new Person("Tanzeela", 19, "Oxford");

// console.log(p1.name);
// console.log(p2.name);
// console.log(p3.name);

// p1.greet();
// p2.greet();
// p3.greet();

const p = new Promise( (resolve, reject) => {

    let value = false;

    if(value) {
        console.log("success");
    }
    else {
        console.log("Failure");
    }
});

console.log(p);