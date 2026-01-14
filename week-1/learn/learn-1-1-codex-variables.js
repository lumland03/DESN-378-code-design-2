
// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: Landon
// Date: 1/14/2026
// ============================================

// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------

const name = "Landon";
const favColor = "blue";
let currentLocation = "home";
let currentMood = "neutral"; 
console.log(currentMood)
console.log(currentLocation)
console.log(name)
console.log(favColor)

// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------

const companyName = "Fromsoftware Inc";
const foundingYear = 1986;
let isActive = true;
let fundingAmount;
console.log(companyName)
console.log(foundingYear)
console.log(isActive)
console.log(fundingAmount)


// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------

let fahrenheit = 40;
const celsius = (fahrenheit - 32)/1.8
console.log(celsius)



// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------

let burger = 10.99;
let fries = 3.99;
let billAmount = burger + fries;
const tipAmount = billAmount * 0.18;
const total = tipAmount + billAmount;
console.log(total)

/////////////////////////////
// burger  --------- 10.99 //
// fries -----------  3.99 //
//                         //
//-------------------------//
// bill amount ----- 14.98 //
// tip amount ------  2.70 //
//-------------------------//
// total ----------- 17.68 //
///////////////////////////// 

// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------

let playlistTotal = 30;
let averageLength = 4.5;
let playlistMinutes = playlistTotal * averageLength;
console.log(playlistMinutes)
let playlistHours = playlistMinutes / 60 
console.log(playlistHours)
let remainder = playlistMinutes % 60 
console.log(remainder)

////////////////////////////////
// Total Songs ----------- 30 //
// Average Length -----  4:30 //
// Length (Minutes) ---- 135m //
// Length (Hours) ---- 2h 15m //
//////////////////////////////// 