let student={
    name:"Rihan",
    age:20,
    rollNo:23,
    mark:90,
    getDetails:function(){
        console.log("Details");
    },
    arr:[1,2,3,4,5,"hello"]
};

// console.log(student.arr[5]);
// student.age=23

// console.log(student);
// student.cgpa=10;

// console.log(student);
// let key="age";
// console.log(student[key])
// delete student[key];
// delete student.cgpa
// console.log(student)

for(let obj in student){
    console.log(obj+": "+student[obj]);
}