//String Built-in Methods.

//(i) Extracting String.

//(1) charAt()
let text="Welcome";
let text_charAt=text.charAt(3);
console.log(text_charAt); //c

//(2) charCodeAt()
let text1="WelcCome";
let text1_charCodeAt1=text1.charCodeAt(3);
let text1_charCodeAt2=text1.charCodeAt(4);
console.log(text1_charCodeAt1);//99
console.log(text1_charCodeAt2);//67

//(3) at()
let text2="Welcome";
let text2_at1=text2.at(2);
let text2_at2=text2.at(-2);
console.log(text2_at1); //l
console.log(text2_at2); //m

//(4) []-Property Access Function.
let text3="Welcome";
let text3_property=text3[4];
console.log(text3_property); //o

//(ii) Extracting Sub-String from a String.

//(1) subString()
let string1="Welcome to JavaScript";
let string1_subString1=string1.substring(11,21);
console.log(string1_subString1); //JavaScript

//(2) slice()
let string2="Welcome to JavaScript";
let string2_slice1=string2.slice(2,12);
let string2_slice2=string2.slice(-10,-2);
let string2_slice3=string2.slice(-2,-10);
console.log(string2_slice3); //Empty String is Printed.
console.log(string2_slice1); //lcome to J
console.log(string2_slice2); //JavaScri

//(3) subStr();
let string3="Welcome to JavaScript";
let string3_subStr=string3.substr(5,15);
console.log(string3_subStr); //me to JavaScrip

//(iii) Converting Characters Case.

//(1) toUpperCase()
let string4="welcome";
let string4_toUpperCase=string4.toUpperCase();
console.log(string4_toUpperCase); //WELCOME

//(2) toLowerCase()
let string5="WELCOME";
let string5_toLowerCase=string5.toLowerCase();
console.log(string5_toLowerCase); //welcome




