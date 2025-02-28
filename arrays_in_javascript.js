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

//(8) concat()
const fruits8 = ["Apple", "Mango", "Kiwi", "Orange"];
const fruits9 = ["Grapes", "DragonFruit", "ButterFruit", "Muskmelon"];
let fruits_concat = fruits8.concat(fruits9);
console.log(fruits_concat); //["Apple","Mango","Kiwi","Orange","Grapes","DragonFruit","ButterFruit","Muskmelon"]

//(9) copyWithin()
const fruits10 = ["Apple", "Mango", "Kiwi", "Orange", "Grapes"];
let fruits10_copyWithin = fruits10.copyWithin(2, 0);
console.log(fruits10_copyWithin); //[ 'Apple', 'Mango', 'Apple', 'Mango','Kiwi']
console.log(fruits10); //[ 'Apple', 'Mango', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits10.copyWithin(3, 2)); //[ 'Apple', 'Mango', 'Apple', 'Apple', 'Mango' ]

//(10) splice()
const fruits11 = ["Apple", "Mango", "Orange", "Grapes"];
let fruits11_splice = fruits11.splice(2, 2, "Kiwi");
console.log(fruits11_splice); //[ 'Orange', 'Grapes' ]
console.log(fruits11); //[ 'Apple', 'Mango', 'Kiwi' ]

//(11) slice()
const fruits12 = ["Apple", "Mango", "Kiwi", "Orange"];
let fruits12_slice = fruits12.slice(1, 3);
console.log(fruits12_slice); //[ 'Mango', 'Kiwi' ]

//Searching an array-element.

//(1) indexOf()
const fruitsa = ["Apple", "Mango", "Kiwi", "Grapes"];
let fruitsa_indexOf = fruitsa.indexOf("Mango");
console.log(fruitsa_indexOf); //1

//(2) lastIndexOf()
const fruitsb = ["Apple", "Banana", "Mango", "Kiwi", "Grapes", "Mango"];
let fruitsb_lastIndexOf = fruitsb.lastIndexOf("Mango");
console.log(fruitsb_lastIndexOf); //5
console.log(fruitsb.indexOf("Mango")); //2

//There is no any 'firstIndexOf()' built-in method in JavaScript.

//(3) firstIndexOf()
//const fruitsc=["Apple","Banana","Mango","Kiwi","Grapes","Mango"];
//let fruitsc_firstIndexOf=fruitsc.firstIndexOf("Mango");
//console.log(fruitsc_firstIndexOf);

//(4) includes()
const fruitsd = ["Apple", "Banana", "Mango"];
let fruitsd_includes = fruitsd.includes("Mango");
console.log(fruitsd_includes); //true

//Sorting of an array.

//(1) sort() and localeCompare() on "Strings".
const names = ["Rahul", "Preethi", "Sahana", "Nitin"];
let names_sort = names.sort();
console.log(names_sort) //[ 'Nitin', 'Preethi', 'Rahul', 'Sahana' ]
let names_sort_ASC = names.sort((a, b) => a.localeCompare(b));
console.log(names_sort_ASC); //[ 'Nitin', 'Preethi', 'Rahul', 'Sahana' ]
let names_sort_DSC = names.sort((a, b) => b.localeCompare(a));
console.log(names_sort_DSC); //[ 'Sahana', 'Rahul', 'Preethi', 'Nitin' ]

//(2) sort() on "Integers".
const numbers = [100, 2, 200, 5, 10, 8, 1];
let numbers_sort = numbers.sort();
console.log(numbers_sort); //[1,10,100,2,200,5,8] Why? Here, default sort() method first converts the numbers into strings and arranges them in "Lexicographical" order.
//In lexicographical order:
//"1" comes before "10" because "1" is smaller than "10".
//"100" comes before "2" because "1" (from "100") comes before "2".
let numbers_sort_ASC = numbers.sort((a, b) => a - b);
console.log(numbers_sort_ASC); //[1,2,5,8,10,100,200]
let numbers_sort_DSC = numbers.sort((a, b) => b - a);
console.log(numbers_sort_DSC); //[200,100,10,8,5,2,1]

//There is no any 'compare()' built-in method in JavaScript.

//(3) compare()
// const points=[50,100,2,5,1,10];
// let points_compare_ASC=points.compare(function(a,b){
//     return a-b;
// });
// console.log(points_compare_ASC);
// let points_compare_DSC=points.compare(function(a,b){
//     return b-a;
// });
// console.log(points_compare_DSC);


