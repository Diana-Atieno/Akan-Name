// getting form by ID and adding and event listener
let formName = document.getElementById("formName");
formName.addEventListener("submit", (e) => {
    e.preventDefault();
// getting gender by Id
gender = document.getElementById("gender").value
dateOfBirth = document.getElementById("year").value
dateOfBirth = new Date(dateOfBirth);

//Declaring variables and changing yearOfBirth to string
CC = yearOfBirth.toString().substr(0, 2);
YY = yearOfBirth.toString().substr(2, 2);
MM = birthMonth
DD = dayOfBirth