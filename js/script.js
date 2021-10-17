// declaring variables //
var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

// get date input //
let year = document.getElementById("year").value 
console.log(year);

let date = document.getElementById("year").value 
console.log("date");

function getDate(){
    let date = document.getElementById("year").value
    console.log("date");       
    

}


// get gender input //
function validate() {
var genders = document.getElementsByName("gender");
console.log("gender");
if( document.year.value == "" || document.year.value.length !=4 || document.year.value >2100 || document.year.value <=1900) {
    alert( "Enter a valid year. ex 2021" );
    document.year.focus() ;
    return false;

}

//applying the provided formula //

// convert Akan Names into arrays//
// male //
// female //
