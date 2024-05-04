"use strict";
// Assignment for this week is Using conditional statements, check if the number is Even or Odd.
function checkEvenOrOdd(number) {
    switch (number % 2) {
        case 0:
            console.log("Even");
            break;
        default:
            console.log("Odd");
    }
}
checkEvenOrOdd(6);
// - Positive, Negative, or Zero.
function checkNum(num) {
    switch (true) {
        case num > 0:
            console.log("Positive");
            break;
        case num < 0:
            console.log("Negative");
            break;
        default:
            console.log("Zero");
            break;
    }
}
checkNum(-3);
// - Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.
function checkDiv(num) {
    switch (true) {
        case num % 2 === 0 && num % 3 === 0:
            console.log($, { num }, is, divisible, by, both, 2, and, 3.);
            break;
        case num % 2 === 0:
            console.log($, { num }, is, divisible, by, 2.);
            break;
        case num % 3 === 0:
            console.log($, { num }, is, divisible, by, 3.);
            break;
        default:
            console.log($, { num }, is, not, divisible, by, 2, or, 3.);
    }
}
checkDiv(6);
// - Take the user age.
// - If the age is 18 or above:
// - Ask if they have a nationality of "Pakistani".
//   - If yes, print "You are eligible to vote."
//   - If no, print "Please obtain a valid ID to vote."
const checkAge = (age, nationality) => {
    if (age >= 18) {
        if (nationality === "Pakistani") {
            console.log("You are eligible for vote.");
        }
        else {
            console.log("Please obtain a valid ID for vote.");
        }
    }
    else {
        console.log("You are not eligible for vote.");
    }
};
let ageToVote = 18;
let nationality = "Pakistani";
checkAge(ageToVote, nationality);
// - Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)
const checkage = (age) => {
    if (age >= 0) {
        if (age <= 12) {
            console.log("You are a child.");
        }
        else if (age <= 19) {
            console.log("You are a teenager.");
        }
        else if (age <= 59) {
            console.log("You are an adult.");
        }
        else {
            console.log("You are a senior citizen.");
        }
    }
    else {
        console.log("Please enter a valid age.");
    }
};
let age = 16;
checkage(age);
// - Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.
const checkDaysInMonth = (monthNo) => {
    switch (monthNo) {
        case 1:
            console.log("The month January has 31 days");
            break;
        case 2:
            console.log("The month Febraury has 28 days");
            break;
        case 3:
            console.log("The month March has 31 days");
            break;
        case 4:
            console.log("The month April has 30 days");
            break;
        case 5:
            console.log("The month May has 31 days");
            break;
        case 6:
            console.log("The month June has 30 days");
            break;
        case 7:
            console.log("The month July has 31 days");
            break;
        case 8:
            console.log("The month August has 31 days");
            break;
        case 9:
            console.log("The month September has 30 days");
            break;
        case 10:
            console.log("The month October has 31 days");
            break;
        case 11:
            console.log("The month November has 30 days");
            break;
        case 12:
            console.log("The month December has 31 days");
            break;
        default:
            console.log("Please enter a valid month number between 1 and 12.");
            break;
    }
};
let monthNo = 9;
checkDaysInMonth(monthNo);
// - Check if a year is a leap year or not.
const checkLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log($, { year }, is, a, leap, year.);
    }
    else {
        console.log($, { year }, is, not, a, leap, year.);
    }
};
let year = 1900;
checkLeapYear(year);
// - Calculate your age based on the current year and your birth year.
const calculateAge = (birthYear, currentYear) => {
    let age = currentYear - birthYear;
    console.log(You, are, $, { age }, years, old.);
};
let birthYear = 2007;
let currentYear = new Date().getFullYear();
calculateAge(birthYear, currentYear);
// - Write a program that calculates the area of a rectangle using length and width variables.
const calculateArea = (length, width) => {
    let area = length * width;
    console.log(`The area of the rectangle which has hieght of ${length} and width of ${width} is ${area.toFixed(2)}`);
};
let l = 50;
let w = 50;
calculateArea(l, w);
// - Write a program that calculates the area of a circle.
const calculateAreaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    console.log(The, area, of, the, circle);
    with (the)
        radius;
    $;
    {
        radius;
    }
    is;
    $;
    {
        area.toFixed(2);
    }
};
;
;
let radius = 10;
calculateAreaOfCircle(radius);
// - Write a program that calculates the area of the cube.
const calculateAreaOfCube = (side) => {
    let area = side * side * side;
    console.log(The, area, of, the, cube);
    with (each)
        side;
    of;
    $;
    {
        side;
    }
    is;
    $;
    {
        area.toFixed(2);
    }
};
;
;
let side = 8.5;
calculateAreaOfCube(side);
// - Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
const convertTemperature = (temperature, unit) => {
    if (unit.toLowerCase() === "f") {
        // Fahrenheit to Celsius conversion
        let celsius = ((temperature - 32) * 5) / 9;
        console.log(temperature + "°F is equal to " + celsius.toFixed(2) + "°C");
    }
    else if (unit.toLowerCase() === "c") {
        // Celsius to Fahrenheit conversion
        let fahrenheit = (temperature * 9) / 5 + 32;
        console.log(temperature + "°C is equal to " + fahrenheit.toFixed(2) + "°F");
    }
    else {
        console.log("Invalid unit. Please use 'F' for Fahrenheit or 'C' for Celsius.");
    }
};
convertTemperature(32, "F");
convertTemperature(100, "C");
// - Convert a given number of seconds into minutes and seconds using variables
const convertSeconds = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    console.log($, { seconds }, seconds, is, equal, to, $, { minutes }, minutes, and, $, { remainingSeconds }, seconds.
    );
};
let seconds = 3500;
convertSeconds(seconds);
// - Write a program that calculates the percentage.
const calculatePercentage = (marks, totalMarks) => {
    let percentage = (marks / totalMarks) * 100;
    console.log(`if the user obtain ${marks} out of ${totalMark} , The user will get ${percentage.toFixed(2)} percentage`);
};
let obtainedMarks = 1044;
let totalMark = 1100;
calculatePercentage(obtainedMarks, totalMark);
