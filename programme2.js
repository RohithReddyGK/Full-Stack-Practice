// Read a string from the user,  Find its length. Extract the word "JavaScript" using substring() or slice(). 
// Replace one word with another word and log the new string. Write a function isPalindrome(str),
// that checks if a given string is a palindrome (reads the same backward).

const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function isPalindrome(str)
{
    const reversedStr=str.split('').reverse().join('');
    return str===reversedStr;
}

rl.question("Enter the string:",(inputString)=>{
    const lengthOfString=inputString.length;
    console.log(`The length of the input string is:${lengthOfString}`);

    const start=inputString.indexOf("JavaScript");
    if(start!=-1)
    {
        const extractedWord=inputString.slice(start,start+"JavaScript".length);
        console.log(`Extracted word is:${extractedWord}`);
    }
    else
    {
        console.log("Word 'JavaScript' not found in the string.");
    }

    const replacedString=inputString.replace("JavaScript","JavaScript lab programme.");
    console.log(`New string after replacement:${replacedString}`);

    const isStringPlaindrome=isPalindrome(inputString);
    console.log(`Is the string palindrome? ${isStringPlaindrome}`);

    rl.close();
});


