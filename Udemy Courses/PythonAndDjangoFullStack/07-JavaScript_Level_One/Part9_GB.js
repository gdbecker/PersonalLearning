alert("Welcome to the form!")

var firstName = prompt("Enter your first name: ")
var lastName = prompt("Enter your last name: ")
var age = prompt("Enter your age: ")
var height = prompt("Enter your height (in cm): ")
var petName = prompt("Enter your pet's name: ")

alert("Thank you for filling out the form!")

isSpyName = false
isSpyAge = false
isSpyHeight = false
isSpyPet = false

//Name check
if (firstName[0] === lastName[0]) {
  isSpyName = true
}

//Age check
if (age >= 20 && age <= 30) {
  isSpyAge = true
}

//Height check
if (height >= 170) {
  isSpyHeight = true
}

//Pet check
if (petName[petName.length - 1] === "y") {
  isSpyPet = true
}

if (isSpyName && isSpyAge && isSpyHeight && isSpyPet) {
  console.log("This is the spy!")
} else {
  console.log("Nothing to see here.")
}
