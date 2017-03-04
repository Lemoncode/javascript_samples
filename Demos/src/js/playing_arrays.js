var students = [];

var addStudent = function (student) {
  students.push(student);
};

var sortStudents = function(key) {
  if (key === 'id') {
    return students.sort(orderById);
  }

  if(key === 'name') {
    return students.sort(orderByName);
  }
};

var orderById = function (first, second) {
  return first.id - second.id;
};

var orderByName = function (first, second) {
  return first.name.localeCompare(second.name);
};

var Student = function (id, name) {
  return {
    id: id,
    name: name,
    showName: function () {
      return this.name;
    },
    showId: function () {
      return this.id;
    }
  };
};

// var std1 = Student(1, 'Lau');
// var std2 = new Student(3, 'Ana');
// var date = Date();
// var date2 = new Date();
//
// console.log(date.__proto__);
// console.log(date2.__proto__);
// console.log(std1.show());
// console.log(std2);
var std1 = Student(1, 'Lau');
students.push(std1);
var std2 = Student(3, 'Jai');
students.push(std2);
var std3 = Student(5, 'Fer');
students.push(std3);
var std4 = Student(99, 'Zan');
students.push(std4);
var std5 = Student(2, 'Berts');
students.push(std5);

var sortedById = sortStudents('id');
console.log(sortedById);
var sortedByName = sortStudents('name');
console.log(sortedByName);
