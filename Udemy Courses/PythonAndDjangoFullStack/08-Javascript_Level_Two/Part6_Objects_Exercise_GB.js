// Part 6 - Objects Exercise

////////////////////
// PROBLEM 1 //////
//////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Add a method called nameLength that prints out the
// length of the employees name to the console.
var employee1 = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength:  function() {
    empName = this.name.replace(/\s/g, '')
    return empName.length
  }
}

console.log(employee1.nameLength())

///////////////////
// PROBLEM 2 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.
var employee2 = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  display: function() {
    alert("Name is " + this.name + ", Job is " + this.job + ", Age is " + this.age + ".")
  }
}

employee2.display()

///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31
}

// Add a method called lastName that prints
// out the employee's last name to the console.
var employee3 = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  lastName: function() {
    emp = this.name.split(" ")
    console.log(emp[1])
  }
}

employee3.lastName()

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp
