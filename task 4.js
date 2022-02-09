// Task 4 - Functions. Parameters and Arguments. Life in Weeks. (10
// points)
// 1. You can continue work inside of the Google Chrome JavaScript
// Console or in your text editor by creating a file with .js extension.
//     Or you can try Repl.it playground as well.
// 2. In this task you are going to create a function that tells us how
// many days, weeks and months we have left if we live until 90
// years old. It will take your current age as the input and
// console.logs a message with our time left in this format: You have
// x days, y weeks, and z months left. Where x, y and z are
// replaced with the actual calculated numbers. For this challenge,
// assume there are 365 days in a year, 52 weeks in a year and 12
// months in a year.

function lifeInWeeks(year){
    if(!isNaN(year) && year < 90){
        let untilYear = 90 - year;
        let days = untilYear * 365;
        let weeks = untilYear * 52;
        let months = untilYear * 12;
        alert("You have " + days + " days, " + weeks + " weeks and " + months + " months left.")
    } else {
        alert("Error. Please enter integer number")
    }
}
let year = prompt("Please enter your age");
lifeInWeeks(year);
