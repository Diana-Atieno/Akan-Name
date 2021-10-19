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