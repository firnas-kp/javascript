const students = [
    { name: 'Alice', age: 20, major: 'Computer Science' },
    { name: 'Bob', age: 22, major: 'Mathematics' },
    { name: 'Charlie', age: 23, major: 'Physics' }
];

// accessing data
console.log(students[0].name);
console.log(students[1].age);
console.log(students[2].major);

// Looping through object array
students.forEach(student => {
    console.log(`${student.name} is ${student.age} years old.`);
})