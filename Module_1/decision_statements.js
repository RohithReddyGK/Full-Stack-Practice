//Decision Statements in JvaScript.

//(1) 'if' and 'if-else'- statements.
if(5%2==0)
{
    console.log(true);
}
else
{
    console.log(false); //false
}

//(2) 'if', 'else if' and 'else' - statements.
let a=10;
let b=20;
let c=30;

if(a>b && a>c)
{
    console.log("a is greater.");
}
else if(b>a &&b>c)
{
    console.log("b is greater.")
}
else
{
    console.log("c is greater."); //c is greater.
}

//Using functions.
function isEven(num) //Function definition.
{
    if(num%2==0)
    {
        console.log(num+" is even number.");
    }
    else
    {
        console.log(num+" is an odd number."); //11 is an odd number.
    }
}

isEven(11); //Calling a defined function(Called function).