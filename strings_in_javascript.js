// //String Built-in Methods.

// //(i) Extracting String.

// //(1) charAt()
// let text="Welcome";
// let text_charAt=text.charAt(3);
// console.log(text_charAt); //c

// //(2) charCodeAt()
// let text1="WelcCome";
// let text1_charCodeAt1=text1.charCodeAt(3);
// let text1_charCodeAt2=text1.charCodeAt(4);
// console.log(text1_charCodeAt1);//99
// console.log(text1_charCodeAt2);//67

// //(3) at()
// let text2="Welcome";
// let text2_at1=text2.at(2);
// let text2_at2=text2.at(-2);
// console.log(text2_at1); //l
// console.log(text2_at2); //m

// //(4) []-Property Access Function.
// let text3="Welcome";
// let text3_property=text3[4];
// console.log(text3_property); //o

// //(ii) Extracting Sub-String from a String.

// //(1) subString()
// let string1="Welcome to JavaScript";
// let string1_subString1=string1.substring(11,21);
// console.log(string1_subString1); //JavaScript

// //(2) slice()
// let string2="Welcome to JavaScript";
// let string2_slice1=string2.slice(2,12);
// let string2_slice2=string2.slice(-10,-2);
// let string2_slice3=string2.slice(-2,-10);
// console.log(string2_slice3); //Empty String is Printed.
// console.log(string2_slice1); //lcome to J
// console.log(string2_slice2); //JavaScri

// //(3) subStr();
// let string3="Welcome to JavaScript";
// let string3_subStr=string3.substr(5,15);
// console.log(string3_subStr); //me to JavaScrip

// //(iii) Converting Characters Case.

// //(1) toUpperCase()
// let string4="welcome";
// let string4_toUpperCase=string4.toUpperCase();
// console.log(string4_toUpperCase); //WELCOME

// //(2) toLowerCase()
// let string5="WELCOME";
// let string5_toLowerCase=string5.toLowerCase();
// console.log(string5_toLowerCase); //welcome

//(iv) String Concatenation.

//(1) concat()
let stringa="Hello";
let stringb=" World";
let string_concat=stringa.concat(stringb);
console.log(string_concat);

//(2) trim()
let stringc="  Hello  ";
let stringc_trim=stringc.trim();
console.log(stringc_trim);

//(3) repeat()
let stringd="Hello";
let stringd_repeat=stringd.repeat(5);
console.log(stringd_repeat);

//(v) Replacing String Content.

//(1) replace()
let stringi="Hello";
let stringi_replace=stringi.replace("Hello","Good Morning!!");
console.log(stringi_replace);

//(2) split()
let stringiii="Hello, Good Morning!!";
const array1=stringiii.split();
const array2=stringiii.split(" ");
const array3=stringiii.split("");
// for(let i=0;i<array.length;i++)
// {
//     console.log(array[i]);
// }
console.log(array1); //[ 'Hello' ]
console.log(array2); //
console.log(array3); //

//(vi) String Searching Methods.

//(1)indexOf()
let stringiv="Welcome to JS class";
let stringiv_indexOf=stringiv.indexOf("JS");
console.log(stringiv_indexOf);

//(2) startsWith() & endsWith()
let stringv="Welcome to JS class";
let stringv_startsWith=stringv.startsWith("Welcome");
let stringv_endsWith=stringv.endsWith("Hello");
console.log(stringv_startsWith);
console.log(stringv_endsWith);

//(3) includes()
let stringvi="Welcome to JS class";
let stringvi_includes1=stringvi.includes("JavaScript");
let stringvi_includes2=stringvi.includes("JS");
console.log(stringvi_includes1);
console.log(stringvi_includes2);


