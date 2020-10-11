// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []


// Create the functions for the tasks

// ADD A NEW STUDENT
var isInterested = prompt("Do you want to work with Class Roster? y/n");
var taskName = "";
while(isInterested === "y" && taskName !== "quit"){
  taskName = prompt("Please select an action: add, remove, display or quit?");
  if(taskName === "add"){
    var student = prompt("What name would you like to add?");
    addNew(student);
  }else if(taskName === "remove"){
    var student = prompt("Which name would you like to remove?");
    removeStudent(student);
  }else if(taskName === "display"){
    display();
  }else{
    alert("Thanks for using the Web App! Please refresh the page to start over.");
    isInterested = "n";
  }
}


// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name){
  roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function removeStudent(name){
  var index = -1;
  if(roster.length>0){
    index = roster.indexOf(name);
  }
  roster.splice(index,1);
}
// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display(){
  console.log(roster);
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
