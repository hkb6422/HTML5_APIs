//JavaScript functions 

//Progress Bar


function Undo20(id){

var undo_id = id;

var x2 = document.getElementsByClassName("progress-bar")[0];
var width2 = x2.style.width;
var number2 = width2.substring(0, 2);

if (parseInt(number2) >=20) {
  number2 = parseInt(number2) - 20;
}
else {
  alert("Sorry, you cannot undo the progress bar anymore!")
}
if (parseInt(number2) <= 100) {
 x2.style.width = parseInt(number2)+"%";
 document.getElementById("percentage").innerHTML=(number2)+"%";
  } 
  document.getElementById(undo_id).disabled= true;
}
 


function Progress20(id)
{
  var progress_id = id;

  var x = document.getElementsByClassName("progress-bar")[0];
  
  var width = x.style.width;
  var number = width.substring(0, 2);

  if (parseInt(number) <= 80) {
  var number = parseInt(number) + 20;
  x.style.width = parseInt(number)+"%";
  document.getElementById("percentage").innerHTML=(number)+"%";
  }

  if (parseInt(number) == 100) {
    alert("Congratulations you have completed the exercise!");
    x.style.width = "0%"
  }
	document.getElementById(progress_id).disabled= true;
}


function Progress15(id)
{
  var progress_id = id;

  var x = document.getElementsByClassName("progress-bar")[0];
  
  var width = x.style.width;
  number = width.substring(0, 2);

  if (parseInt(number) <= 85) {
  var number = parseInt(number) + 15;
  x.style.width = parseInt(number)+"%";
  document.getElementById("percentage").innerHTML=(number)+"%";
  }

  if (parseInt(number) == 100) {
    alert("Congratulations you have completed the exercise!");
    x.style.width = "0%"
  }
   document.getElementById(progress_id).disabled= true;
}


function Undo15(id){

var undo_id = id;

var x2 = document.getElementsByClassName("progress-bar")[0];
var width2 = x2.style.width;
var number2 = width2.substring(0, 2);

if (parseInt(number2) >=15) {
  number2 = parseInt(number2) - 15;
}
else {
  alert("Sorry, you cannot undo the progress bar anymore!")
}
if (parseInt(number2) <= 100) {
 x2.style.width = parseInt(number2)+"%";
 document.getElementById("percentage").innerHTML=(number2)+"%";
  } 
  document.getElementById(undo_id).disabled= true;
}



function Progress10(id)
{
  var progress_id = id;

  var x = document.getElementsByClassName("progress-bar")[0];
  
  var width = x.style.width;
  number = width.substring(0, 2);

  if (parseInt(number) <= 90) {
  var number = parseInt(number) + 10;
  x.style.width = parseInt(number)+"%";
  document.getElementById("percentage").innerHTML=(number)+"%";
  }

  if (parseInt(number) == 100) {
    alert("Congratulations you have completed the exercise!");
    x.style.width = "0%"
  }
	document.getElementById(progress_id).disabled= true;
}


function Undo10(id){

var undo_id = id;

var x2 = document.getElementsByClassName("progress-bar")[0];
var width2 = x2.style.width;
var number2 = width2.substring(0, 2);

if (parseInt(number2) >=10) {
  number2 = parseInt(number2) - 10;
}
else {
  alert("Sorry, you cannot undo the progress bar anymore!")
}
if (parseInt(number2) <= 100) {
 x2.style.width = parseInt(number2)+"%";
 document.getElementById("percentage").innerHTML=(number2)+"%";
  } 
  document.getElementById(undo_id).disabled= true;
}


//Images

function displayImage()
{
element = document.getElementById('default_code')
element.src="images/geolocation_parameters.jpg";

}

function displayImage1()
{
element = document.getElementById('default_code')
element.src="images/geolocation_success.jpg";
}

function displayImage2()
{
element = document.getElementById('default_code')
element.src="images/geolocation_error_1.jpg";
}

function displayImage3()
{
element = document.getElementById('default_code')
element.src="images/geolocation_options.jpg";
}

function displayImage4()
{
element = document.getElementById('googleMaps')
element.src="images/google_maptype.jpg";
}

function displayImage5()
{
element = document.getElementById('googleMaps')
element.src="images/google_zoom.jpg";
}

function displayImage6()
{
element = document.getElementById('googleMaps')
element.src="images/google_centre.jpg";
}
