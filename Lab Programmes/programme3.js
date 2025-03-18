//Create an object student with properties: name (string), grade (number), subjects (array), displayInfo() (method to log the student's details).
// Write a script to dynamically add a passed property to the student object, with a value of true or false based on their grade. 
// Create a loop to log all keys and values of the student object. 

const student={
    name:"John Doe",
    grade:40,
    subjects:["Kannada","Maths","Science"],
    displayInfo:function(){
        console.log(`Name: ${this.name}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Subjects: ${this.subjects.join(',')}`);
    }
};

student.passed=student.grade>=50;
student.displayInfo();

for(let key in student)
{
    if(typeof student[key]!='function')
    {
        console.log(`${key}:${student[key]}`);
    }
    //console.log(`${key}:${student[key]}`);
}
