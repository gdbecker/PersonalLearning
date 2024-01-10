// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addStudent() {
  var name = prompt("What name would you like to add? ")
  roster.push(name)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
function removeStudent() {
  var name = prompt("What name would you like to remove? ")
  for (i=0; i<roster.length; i++) {
    if (roster[i] === name) {
      roster.splice(i,1)
      break
    }
  }
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display() {
  students = "Current roster: "
  for (name of roster) {
    students = students + name + ", "
  }

  alert(students)
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.

var useApp = prompt("Would you like to use the Roster app? y/n ")


while (useApp == "y") {
  var action = prompt("Please select an action: Add (a), Remove (r), Display (d), Quit (q)")

  if (action == "a") {
    addStudent()
  } else if (action == "r") {
    removeStudent()
  } else if (action == "d") {
    display()
  } else if (action == "q") {
    useApp = "n"
  }
}

if (useApp == "n") {
  alert("Thank you for using the Roster app! Please refresh the browser to use again.")
}
