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
