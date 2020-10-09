var fname = prompt("Welcome to our site! Your first name: ");
var lname = prompt("Your last name: ");
var age = prompt("Your age: ");
var height = prompt("Your height in cms: ");
var petName = prompt("Your pet name: ");

//Check spy criterias

if(fname[0] === lname[0] && age > 20 && age < 30 && height >=170 && petName[petName.length-1] === "y")
{
  console.log("Welcome Spy!");
}else{
  console.log("There is nothing for you here!");
}
