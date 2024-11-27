const student = {
    name: "John Doe",
    age: 21,
    enrolled: true,
    courses: ["Math", "Science", "Literature"],
    displayInfo() {
        return `Student: ${this.name}, Age: ${this.age}`;
    }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Info:", student.displayInfo());

const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);


const newStudentObject = JSON.parse(studentJSON);
console.log("Parsed Object:", newStudentObject);


console.log("Are objects equal?", JSON.stringify(student) === JSON.stringify(newStudentObject));

const { name, courses } = student;
console.log("Name:", name);
console.log("Courses:", courses);


const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log("First Score:", score1);
console.log("Second Score:", score2);

const clonedStudent = { ...student, graduationYear: 2024 };
console.log("Cloned Student:", clonedStudent);


const newCourses = ["History", "Art"];
const allCourses = [...student.courses, ...newCourses];
console.log("All Courses:", allCourses);


student.addCourse = function(course) {
    this.courses.push(course);
    console.log(`${course} added!`);
};


student.totalCourses = function() {
    return this.courses.length;
};

student.addCourse("Philosophy");
console.log("Total Courses:", student.totalCourses());





