//Iteration Statements in JavaScript.

//(1) 'for' - loop.
for(let i=0;i<5;i++)
{
    console.log("Hello");
}
//Output:
// Hello
// Hello
// Hello
// Hello
// Hello

//(2) 'while' - loop.
let j=0;
while(j<5)
{
    console.log("World!!");
    j++;
}
//Output:
// World!!
// World!!
// World!!
// World!!
// World!!

//(3) 'do-while' - loop.
let k=0;
do
{
    console.log("What's Up?");
    k++;
}
while(k<5);
//Output:
// What's Up?
// What's Up?
// What's Up?
// What's Up?
// What's Up?

//(4) 'for in' - loop.
const cars={car1:"Range Rover",car2:"Tata",car3:"BMW"};
for(let key in cars)
{
    console.log(`${key}:${cars[key]}`);
}
//Output:
// car1:Range Rover
// car2:Tata
// car3:BMW



