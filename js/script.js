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
//adding control flows 
if (dayOfTheWeek == 0 && gender == "female") {
    bornDay = "Sunday";
    akanName = femaleAkanNames[0];
} else if (dayOfTheWeek == 0 && gender == "male") {
    bornDay = "Sunday";
    akanName = maleAkanNames[0];


} else if (dayOfTheWeek == 1 && gender == "female") {
    bornDay = "Monday";
    akanName = femaleAkanNames[1];
} else if (dayOfTheWeek == 1 && gender == "male") {
    bornDay = "Monday";
    akanName = maleAkanNames[1];


} else if (dayOfTheWeek == 2 && gender == "female") {
    bornDay = "Tuesday";
    akanName = femaleAkanNames[2];
} else if (dayOfTheWeek == 2 && gender == "male") {
    bornDay = "Tuesday";
    akanName = maleAkanNames[2];


} else if (dayOfTheWeek == 3 && gender == "female") {
    bornDay = "Wednesday";
    akanName = femaleAkanNames[3];
} else if (dayOfTheWeek == 3 && gender == "male") {
    bornDay = "Wednesday";
    akanName = maleAkanNames[3];


} else if (dayOfTheWeek == 4 && gender == "female") {
    bornDay = "Thursday";
    akanName = femaleAkanNames[4];
} else if (dayOfTheWeek == 4 && gender == "male") {
    bornDay = "Thursday";
    akanName = maleAkanNames[4];


} else if (dayOfTheWeek == 5 && gender == "female") {
    bornDay = "Friday";
    akanName = femaleAkanNames[5];
} else if (dayOfTheWeek == 5 && gender == "male") {
    bornDay = "Friday";
    akanName = maleAkanNames[5];


} else if (dayOfTheWeek == 6 && gender == "female") {
    bornDay = "Saturday";
    akanName = femaleAkanNames[6];
} else if (dayOfTheWeek == 6 && gender == "male") {
    bornDay = "Saturday";
    akanName = maleAkanNames[6];
}


}