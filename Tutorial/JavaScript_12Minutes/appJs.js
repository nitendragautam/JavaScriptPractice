  console.log("Hello, World!"); //Writes Hello World in Web Site 


//Variable

var numericVariable =5;  //Numeric Variables 
var stringVariable = "StrinValue";  //String Value 
var booleanVariable = false;

/*
Operations in Java Script 
*/

var sentence1 ="This is";
var sentence2 =" a Sentence";

var completeSentence = sentence1 +sentence2; //Concatenations Operations

console.log(completeSentence);  //Logs the Sentence in the Console


//Numbers 
var num1 =2;
var num2 = 3;
var totalSum = num1+num2;

console.log("Total Sum "+totalSum);

console.log("Multiplication Operation "+ num1 * num2);
console.log("Subtraction Operation "+(num1-num2));

//Decremental operant 
var decOperand = --totalSum;

console.log("Decremental Operand "+decOperand);

var incOperandBef =++num1;
console.log("Incremental Operand Before "+incOperandBef);

//incremental Operand 
var inOperand = num1++;
console.log("Incremental Operant Result "+inOperand);
console.log("Num 1"+num1);


/*
String stored a Object  and String Manipulation

*/

var alpha = "ABECDFG";
var alphaLength = alpha.length;  //Stored as Object
console.log(" String Length "+alphaLength);


//SubString of a String 
var stringResult = alpha.substring(3,5);
console.log("SubString Result "+stringResult);

/*

Arrays : There are different Ways to Create Array in JavaScripr
*/

//First way to Create Array
var a = new Array(7);  //Declare new Array 
a[0] = "cat";
a[1] = "dog";
a[2] = 95;
a[3] =90/12;
a[4] =90*2;
a[5] = a[0] +a[1];
a[6] =true;

console.log(" 6 th Element "+a[5]);

//Second wayto create Array 
var b = new Array("cat","dog",53,true);
console.log("Second Element "+b[1]);


var c = ["dog","cat",59, true];
console.log("Third Element "+c[3]);



/*
Functions in JavaScript
*/


function sayHello(who){
    console.log("Hello " +who);
}


sayHello("Nitendra");



/*
Flow Control Statement
*/



var flow1 =71;

if(flow1 >15){
    console.log("Greater than Check  "+flow1);
}

if(flow1<=10){
    console.log("Smaller Than Check " +flow1);
}

if(flow1 == 15){
    console.log ("Equal to Check "+flow1);
}

if(flow1 != 15){
   console.log ("Not Equals to  Condition")
}


var name ="niten";

if(name == "Niten"){
    console.log("Both Name are Same");
} else {
    console.log("The condition was false ");
}


/*
Looping in JavaScript 
*/

for (i =0;i<5;i++){
   console.log(" This is Iteration "+i + "<br>");
}


//JavaScript allows maximum 16 Digits Number
console.log("Maximum allowed number in JavaScript "+Number.MAX_VALUE);
console.log(" Minimum allowed number in JavaScripr")



//window.onload =hello();




function hello(){
var yourName = prompt("What is your Name?");

if(yourName != null){
    document.getElementById("sayHello").innerHTML ="Hello" + yourName;
    
}else{
    alert("Please enter the Name next time ");
}
    
};



/*
Writing to Browser
*/

document.write("5 +4 =" ,5+4 ,"<br />"); //considers 

document.write("5 +4 =" +5 + 4, "<br />") ; //Conctatenates 5 and 4




//Page Title
console.log(window.document.title)
console.log(document.title)


/*
Encoding and decoding of URLs
*/



var httpURL = "https://stackoverflow.com/questions?query1=Hello World";

var encodedURL =encodeURI(httpURL);

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
};


var urlParameter =  getParameterByName("query1",encodedURL);
document.write("Encoded URL "+encodedURL);

    document.write(urlParameter);


var usStatesAbbrebration=new Array('AL','AK','AZ','AR','CA','CO','CT','DC','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MI','MN','MS','MO','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT','WA','WI','WV','WY');

var usStatesNames=new Array('Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','District of Columbia','Delaware','Florida','Georgia','Hawaii','Iowa','Idaho','Illinois','Indiana','Kansas','Kentucky','Louisiana','Massachusetts','Maryland','Maine','Michigan','Minnesota','Mississippi','Missouri','Montana','North Carolina','North Dakota','Nebraska','New Hampshire','New Jersey','New Mexico','Nevada','New York','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Virginia','Vermont','Washington','Wisconsin','West Virginia','Wyoming');


console.log(usStatesNames);


console.log("Sine of 3.5 "+Math.sin(3.5));

console.log("Parse Int "+parseInt('123',10));

//Convert Binary number to Integer
console.log("Parse Int "+parseInt('11',2));

//Converting 



