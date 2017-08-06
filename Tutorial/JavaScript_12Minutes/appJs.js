  document.write("Hello, World!"); //Writes Hello World in Web Site 


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







