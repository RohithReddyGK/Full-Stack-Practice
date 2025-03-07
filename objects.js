//JavaScript Objects and Methods.

//Creating the object by directly passing the properties.
const person={fname:"Rahul",lname:"Kumar",age:25};
console.log(person.fname+" "+person.lname); //Rahul Kumar

//Creating the object using "new" - keyword.
const person_new=new Object();
person_new.fname="Rohith Reddy";
person_new.lname="G K";
person_new.age=20;
console.log(person_new); //{ fname: 'Rohith Reddy', lname: 'G K', age: 20 }
console.log(person_new.fname+" "+person_new.lname); //Rohith Reddy G K

//Accessing the object properties.
//(1) Using "."(dot) - operator.
const cars={car1:"Range Rover",car2:"Tata",car3:"BMW"};
let cars_access=cars.car1;
console.log(cars_access); //Range Rover

//(2) Using "[" "]" - parenthesis.
const cars1={car1:"Range Rover",car2:"Tata",car3:"BMW"};
let cars1_access=cars1["car1"];
console.log(cars1_access); //Range Rover

//Adding a new property to an object.
const person_details={fname:"Rahul",lname:"Kumar",age:25};
let person_details_add=person_details.nationality="Indian";
console.log(person_details_add); //Indian
console.log(person_details); //{ fname: 'Rahul', lname: 'Kumar', age: 25, nationality: 'Indian' }

//Deleting a property from an object.
const person_details1={fname:"Rahul",lname:"Kumar",age:25,gender:"Male"};
let person_details1_delete=delete person_details1.gender;
console.log(person_details1_delete); //true
console.log(person_details1); //{ fname: 'Rahul', lname: 'Kumar', age: 25 }

//Changing the value of already existing property.
const person_details2={fname:"Rahul",lname:"Kumar",age:25};
let person_details2_change=person_details2.fname="Ashok";
console.log(person_details2_change); //Ashok
console.log(person_details2); //{ fname: 'Ashok', lname: 'Kumar', age: 25 }

//Nested Objects.
const persona={fname:"Rahul",lname:"Kumar",age:25, 
    myCars:{car1:"Range Rover",car2:"Tata",car3:"BMW"}
};
let persona_access1=persona.myCars.car1;
let persona_access2=persona.myCars.car2;
console.log(persona_access1); //Range Rover
console.log(persona_access2); //Tata

//JavaScript Object Methods.
const personb={fname:"Rahul",lname:"Kumar",age:25,
    fullname:function()
    {
        return this.fname+" "+this.lname+" age is:"+this.age;
    }
};
let personb_access=personb.fullname(); //If we write just fullname, without parenthesis we get, "[Function: fullname]".
console.log(personb_access); //Rahul Kumar age is:25


