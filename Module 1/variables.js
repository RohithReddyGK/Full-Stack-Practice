//Diffrent keywords like: var ,let, and const keywords are used to initialize the variables.
var a=10; //'var' was used for older versions(Till 2015).
let b=50; //'let' is currently used keyword.
const c=100; //'const' is basically used for initializing the variable value as constant.
let sum=a+b+c;
console.log(sum);

//c=50; --> Error, because re-assignment for the constant value "c",is not allowed.
console.log(a+c);

