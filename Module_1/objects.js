//JavaScript Objects and Methods.

//Creating the object by directly passing the properties.
const person = { fname: "Rahul", lname: "Kumar", age: 25 };
console.log(person.fname + " " + person.lname); //Rahul Kumar

//Creating the object using "new" - keyword.
const person_new = new Object();
person_new.fname = "Rohith Reddy";
person_new.lname = "G K";
person_new.age = 20;
console.log(person_new); //{ fname: 'Rohith Reddy', lname: 'G K', age: 20 }
console.log(person_new.fname + " " + person_new.lname); //Rohith Reddy G K

//Accessing the object properties.
//(1) Using "."(dot) - operator.
const cars = { car1: "Range Rover", car2: "Tata", car3: "BMW" };
let cars_access = cars.car1;
console.log(cars_access); //Range Rover

//(2) Using "[" "]" - parenthesis.
const cars1 = { car1: "Range Rover", car2: "Tata", car3: "BMW" };
let cars1_access = cars1["car1"];
console.log(cars1_access); //Range Rover

//Adding a new property to an object.
const person_details = { fname: "Rahul", lname: "Kumar", age: 25 };
let person_details_add = person_details.nationality = "Indian";
console.log(person_details_add); //Indian
console.log(person_details); //{ fname: 'Rahul', lname: 'Kumar', age: 25, nationality: 'Indian' }

//Deleting a property from an object.
const person_details1 = { fname: "Rahul", lname: "Kumar", age: 25, gender: "Male" };
let person_details1_delete = delete person_details1.gender;
console.log(person_details1_delete); //true
console.log(person_details1); //{ fname: 'Rahul', lname: 'Kumar', age: 25 }

//Changing the value of already existing property.
const person_details2 = { fname: "Rahul", lname: "Kumar", age: 25 };
let person_details2_change = person_details2.fname = "Ashok";
console.log(person_details2_change); //Ashok
console.log(person_details2); //{ fname: 'Ashok', lname: 'Kumar', age: 25 }

//Nested Objects.
const persona = {
    fname: "Rahul", lname: "Kumar", age: 25,
    myCars: { car1: "Range Rover", car2: "Tata", car3: "BMW" }
};
let persona_access1 = persona.myCars.car1;
let persona_access2 = persona.myCars.car2;
console.log(persona_access1); //Range Rover
console.log(persona_access2); //Tata

//JavaScript Object Methods.
const personb = {
    fname: "Rahul", lname: "Kumar", age: 25,
    fullname: function () {
        return this.fname + " " + this.lname + " age is:" + this.age;
    }
};
let personb_access = personb.fullname(); //If we write just fullname, without parenthesis we get, "[Function: fullname]".
console.log(personb_access); //Rahul Kumar age is:25

//Displaying JvaScript Objects.

//(1) By using object name.
const personc = { name: "Ram", age: 25, city: "Bengaluru" };
console.log(personc.name + " " + personc.age + " " + personc.city); //Ram 25 Bengaluru

//(2) By using 'for in loop'.
const persond = { name: "Ram", age: 25, city: "Bengaluru" };
for (let x in persond) {
    console.log(persond[x]); //Ram 25 Bengaluru (Here, each property is displayed in new line (or) separate line).
}

//(3) By using 'object.values()'.
const persone = { name: "Ram", age: 25, city: "Bengaluru" };
const myAry = Object.values(persone);
console.log(myAry); //[ 'Ram', 25, 'Bengaluru' ]

//JavaScript object-constructor.
class Personf {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
};
const stud1 = new Personf("Ram", "Kumar", 25);
const stud2 = new Personf("Rahul", "Kumar", 27);
const stud3 = new Personf("Praveen", "Kumar", 30);
console.log("The details of students are:", stud1, stud2, stud3);
//The details of students are: Personf { fname: 'Ram', lname: 'Kumar', age: 25 } Personf { fname: 'Rahul', lname: 'Kumar', age: 27 } Personf { fname: 'Praveen', lname: 'Kumar', age: 30 }

//OR The above object-constructor can also be created like this.
function Persong(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}
const concept4 = new Persong("OOPS", "Java");
const concept5 = new Persong("OOPS", "Advanced Java");
const concept6 = new Persong("FSD", "HTML,CSS,JAVASCRIPT");
console.log("The details of concepts are:", concept4, concept5, concept6);
//The details of concepts are: Persong { fname: 'OOPS', lname: 'Java' } Persong { fname: 'OOPS', lname: 'Advanced Java' } Persong { fname: 'FSD', lname: 'HTML,CSS,JAVASCRIPT' }
