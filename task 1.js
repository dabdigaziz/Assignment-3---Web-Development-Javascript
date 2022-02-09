// Task 1-Strings. Changing String Casing(10 points):
// 1. Go to Google Chrome Browser-> View -> Developers ->JavaScript
// Console then to snippets(as was shown in the lecture)
// 2. Create a prompt which will ask “What is your name?” and user can
// write his/her name;
// 3. Assign a name to a variable;
// 4. Create an alert which will show the message “Hello” + name
// written into the prompt. An example is “Hello Gulzhan”. A user can
// write his/her name in different ways, he/she can write it starting
// with lowercase or can start the name with uppercase and use
// uppercase in the middle of the name as well. Examples:
// aidana
// AidAna
// aiDana
// 5. By using properties of JavaScript as .length(); .toLowerCase();
// .toUpperCase(); .slice(a,b); and concatenation, write a program
// which standardizes the display of the name regardless of how the
// user writes their name.

function convertToNormal(name){
  if(isNaN(name)){
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    alert("Hello " + name);
  } else {
    alert("Error. Please enter string")
  }
}
let name = prompt("Please enter your name");
convertToNormal(name);