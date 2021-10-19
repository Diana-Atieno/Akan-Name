// getting form by ID and adding and event listener
let formName = document.getElementById("formName");
formName.addEventListener("submit", (e) => {
    e.preventDefault();
// getting gender by Id
gender = document.getElementById("gender").value
DayOfMonth = document.getElementById("year").value
DayOfMonth = new Date(DayOfMonth);

//Declaring variables and changing yearOfBirth to string
CC = centuryYear.toString().substr(0, 2);
YY = yearOfBirth.toString().substr(2, 2);
MM = monthBorn
DD = DayOfMonth

let yearOfBirth = DayOfMonth.getFullYear();
let monthBorn = DayOfMonth.getMonth() + 1;
let DayOfMonth = DayOfMonth.getDate();

//formula for DayOfWeek
dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

// converting the day of the week to integer
dayOfTheWeek = parseInt(dayOfTheWeek);

//declaring akan names and initializing string variables of names

let akanName;

    femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

//declaring bornDay and initializing string variables for day
let bornDay;

    femaleAkanNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    maleAkanNames =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];