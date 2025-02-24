//Multiple operations on arrays in JavaScript.

//Length Property.
//Calculating the length of an array.
const fruits=["Apple","Banana","Mango","Kiwi"];
let fruits_length=fruits.length;
console.log(fruits_length); //4

//Accessing the first element from an array.
const cars=["Tata","BMW","Audi","Benz"];
let cars_first_element=cars[0];
console.log(cars_first_element); //Tata

//Accessing the last element from an array.
const degrees=["UG","PG","PhD"];
//let degrees_last_element=[[degrees.length]-1];
let degrees_length=degrees.length;
let last_element=degrees_length-1;
console.log(last_element); //2
console.log(degrees[2]); //PhD

//Looping array elements.
const departments=["ISE","CSE","AIML","ME","CV","DS","ECE","EEE"];
let departments_length=departments.length;
for(let i=0;i<departments_length;i++){
    console.log(departments[i]); //ISE,CSE,AIML,ME,CV,DS,ECE,EEE(In new line for every element).
}

//Array-Methods.

//(1) at()
const fruits1=["Apple","Mango","Kiwi","Orange"];
let fruits1_at=fruits1.at(1);
console.log(fruits1_at); //Mango

//(2) join()
const fruits2=["Apple","Mango","Kiwi","Orange"];
let fruits2_join=fruits2.join("*");
console.log(fruits2_join); //Apple*Mango*Kiwi*Orange

//(3) push()
const fruits3=["Apple","Mango","Kiwi","Orange"];
let fruits3_push=fruits3.push("Grapes");
console.log(fruits3_push); //5
console.log(fruits3); //[ 'Apple', 'Mango', 'Kiwi', 'Orange', 'Grapes' ]

//(4) pop()
const fruits4=["Apple","Banana","Grapes"];
let fruits4_pop=fruits4.pop();
console.log(fruits4_pop); //Grapes

//(5) shift()
const fruits5=["Apple","Mango","Kiwi","Orange"];
let fruits5_shift=fruits5.shift();
console.log(fruits5_shift); //Apple 
console.log(fruits5); //[ 'Mango', 'Kiwi', 'Orange' ]

//(6) unshift()
const fruits6=["Apple","Mango","Kiwi","Orange"];
let fruits6_unshift=fruits6.unshift("Grapes");
console.log(fruits6_unshift); //5
console.log(fruits6); //[ 'Grapes', 'Apple', 'Mango', 'Kiwi', 'Orange' ]

//(7) delete()
const fruits7=["Apple","Mango","Kiwi","Orange"];
let fruits7_delete=delete fruits7[2];
console.log(fruits7_delete); //true
console.log(fruits7); //[ 'Apple', 'Mango', <1 empty item>, 'Orange' ]




