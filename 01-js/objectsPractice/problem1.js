// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno



// let student={
//     firstName:"Dola",
//     class:"10th",
//     rollno:24
// }

// console.log(`The student name is ${student.firstName} from class ${student.class} with rollnumber ${student.rollno}`)
// -----------------------------------------------------------------------------------------------


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// let student = {
//     firstName: "Dola",
//     class: "10th",
//     rollno: 24
// }

// // delete student.rollno;

// //  console.log(`The student name is ${student.firstName} from class ${student.class} with rollnumber ${student.rollno}`)

// // 3. Write a JavaScript program to get the length of a JavaScript object.


// let student = {
//     firstName: "Dola",
//     class: "10th",
//     rollno: 24
// }

// let count =0;

// for(let i in student){
//     if(student.hasOwnProperty(i))
//     count++;
// }

// console.log(count);
// console.log(Object.keys(student).length);

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];


// var library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false

// }

// getVolume(){
//     const pi = Math.PI;
//     const volume = pi*Math.pow(this.widht,2)*this.height;
//     return volume.toFixed(4);
// }

// }

// let cyl = new cylinder(9,5);
// console.log(cyl.getVolume());

let currentDate=new Date();

let con=setInterval(()=>{console.log(currentDate.toTimeString())},1000)