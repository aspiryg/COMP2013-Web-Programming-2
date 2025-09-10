/* 
Course: COMP2013
Author: Ziad Ewais
Title: COMP2013-Week1-JS-Review-Answers
Synopsis: Welcome to week 1 of COMP2013 - Web Programming 2.
To start on the right foot we need to review the JavaScript
required to develop in React. 
*/

/*
*1
JavaScript Objects are a collection data structure where data are defined by "Key" and "Value"
Keys are a string followed by a colon (:)
Values can be any JavaScript data type (String, number, boolean, collection, ...)
*/
const data = [
  {
    id: 1,
    studentName: "John Doe",
    dateOfBirth: "2002-05-11",
    tuitionPaid: 12600,
    program: "General Arts and Science",
    highSchool: "West Andrews HS",
    courses: ["MATH8", "CHEM12", "COMP205", "COMM110", "GENE200"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 95,
      GENE101: 66,
      CHEM11: 85,
      COMM20: 45,
    },
  },
  {
    id: 2,
    studentName: "Shrey Gupta",
    dateOfBirth: "2003-11-23",
    tuitionPaid: 10200,
    program: "Welding",
    highSchool: "Toronto Heights HS",
    courses: ["MATH8", "WELD12", "WELD205", "CARP55", "GENE101"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 78,
      WELD101: 86,
      PHYS20: 55,
      COMM20: 0,
    },
  },
  {
    id: 3,
    studentName: "Veronica Martinez",
    dateOfBirth: "2002-10-04",
    tuitionPaid: 11300,
    program: "Computer Systems Technician",
    highSchool: "St. James HS",
    courses: ["COMP905", "COMP1100", "CARE10", "GENE66", "GENE12"],
    hasAttendedOrientation: false,
    previousCoursesGrades: {
      COMP101: 95,
      COMP1000: 88,
      GENE102: 68,
      COMM110: 75,
    },
  },
  {
    id: 4,
    studentName: "Jana Mohammed",
    dateOfBirth: "2003-02-16",
    tuitionPaid: 15900,
    program: "Automotive",
    highSchool: "INTERNATIONAL",
    courses: ["AUTO102", "AUTO102", "MATH8", "GENE101", "COMM110"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {},
  },
];

/* 
*2
To access data inside an object, we use the dot notation, or the square brackets notation
*/

const student0 = data[0];
console.log(student0.courses[1]);
console.log(student0["courses"][1]);

/*
*3
To add or change data in an object we call the key and assign a value to it
*/
student0.highSchool = "New High School";
console.log(student0.highSchool);
student0.thisNewKey = "anything here";
console.log(student0);

/*
*4
Deconstruction of an object creating variables with same studentNames of keys with the assigned values 
 */

const highSchoolStudent0 = student0.highSchool;
console.log(highSchoolStudent0);
const { highSchool, previousCoursesGrades, courses } = student0;

/*
 *5
Rest operator (...) is used to assign the rest of the data to a new object
 */

const student1 = data[1];
const { id, studentName, ...restOfStudent } = student1;

// studentName
// console.log(restOfStudent)

/**
 *6
 Spread operator (...) to spread keys of an object in a new object
 */

const newStudent = {
  ...restOfStudent,
  address: "123 Bank St., Cornwall",
  Hobbies: ["soccer", "disc golf", "reading"],
};

// console.log(newStudent)

/**
 *7
 Template literals is creating strings with JS code embedded like variables or statements
 using back tick (`) operator
 */

//  console.log(`The student's address is ${newStudent.address}
//  and the sum of 1 and 2 is ${1 + 2}`)

/**
 *8
 * Arrow function is used to replace the old function declaration. Best used for one liner functions (lambda functions)
 */

//old function declaration method
function oldFunction() {
  console.log("This is a old function");
}

oldFunction();

//arrow function declaration method
const newFunction = () => {
  console.log("this is a new function");
};
newFunction();

//Lambda function declaration method

const lambdaFunction = () => console.log("This is a lambda function");

/**
 *9
 Ternaries are short, one liners, if/else statements 
 */
console.log(
  student0.previousCoursesGrades.COMM20 >= 50
    ? "This student has passed COMM20"
    : student0.previousCoursesGrades.COMP101 >= 50
    ? "This student passed COMP101"
    : "This student failed COMP101"
);

/**
 *10
 Short circuting with &&, ||, ?? operators
 NOTE: Falsy values are (false, 0 (the number zero), empty string, undefined, NaN, null)
 */

console.log(
  student0.previousCoursesGrades.COMP101 >= 50 &&
    "This is student passed COMP101"
);

//and operator work that both values need to be true

// console.log(student0.previousCoursesGrades.COMM20 >= 50 || "This student has failed COMM20")

//or operator work that one of the values need to be true
console.log(
  data[1].previousCoursesGrades.COMM20 || "This student has failed COMM20"
);

//using or operator with a zero value cause issues beacuse zero number is a falsy value

//to solve this issue we use the Nullish coalescing operator
console.log(
  data[1].previousCoursesGrades.COMM20 ?? "This student has failed COMM20"
);

/**
 *11
 Array map: To change all the values of an array at once using a statement
 stored in a new collection (array or object)
 */
const arr = [10, 3, 60, 8];
console.log(arr.map((a, b) => a - b));

//to get all students names in a new array

/**
 *12
 Array filter: to filter certian data in regarded to a statement stored in a new collection
 */

const filteredArray = arr.filter((a) => a < 10);
console.log(filteredArray);
//Filter all students born in 2002 using filter and includes method

const studentsBornIn2002 = data.filter((student) =>
  student.dateOfBirth.includes("2002")
);
console.log(studentsBornIn2002);

/**
 *13
 Array reduce: To reduce an array to a single value 
 Ex: display the total of all students tuition paid
 */

//the reduce method takes two parameters, the first is a callback function and the second is the initial value.
const totalTuitionPaid = data.reduce(
  (total, student) => total + student.tuitionPaid,
  0
);
console.log(totalTuitionPaid);

/**
 *14
 Array sort: to sort arrays ascendingly or descendingly.
 NOTE: This method changes the orginal array. If you want to avoid this, use .slice() method before sorting 
 
 */
console.log(arr.sort((a, b) => b - a)); //descending
console.log(arr.sort((a, b) => a - b)); //ascending

//sort students by paid tuition

const studentsByTuition = data
  .slice()
  .sort((a, b) => a.tuitionPaid - b.tuitionPaid);
console.log(studentsByTuition);

/**
 *15
 Working with immutable arrays
 */

//adding a new student object to the data array using spread (...) operator

const newerStudent = {
  id: 5,
  studentName: "Jane James",
  dateOfBirth: "2003-03-18",
  tuitionPaid: 13600,
  program: "Compter Programming",
  highSchool: "Ottawa High HS",
  courses: ["COMP1011", "COMP1012", "COMP1013", "GENE101", "GENE102"],
  hasAttendedOrientation: false,
  previousCoursesGrades: {
    COMP201: 87,
    COMP205: 78,
    GENE20: 56,
    COMM110: 77,
  },
};

const newData = [...data, newerStudent]; //adding a new student object to the data array using spread (...) operator
console.log(newData);

//Remove a student object using filter method

const removedStudent = newData.filter((student) => student.id !== 2); //remove student with id 2 or add all students except student with id 2 to a new array
console.log(removedStudent);

//Update a student object using the map method
const updatedStudent = newData.map((student) =>
  student.id === 3 ? { ...student, hasAttendedOrientation: true } : student
); //update student with id 3 to attended orientation if not already using the map method and ternary operator
console.log(updatedStudent);
