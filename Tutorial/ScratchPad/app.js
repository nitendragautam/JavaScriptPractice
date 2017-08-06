//Calling the function before it created 
b();

//Calling a Variable before it is Defined ,Gives a UnDefined Message
//If Variable a is not declared ,it throws a error
console.log(a);

var a = 'Hello Wolrd!'; //Global Object which can be aaccessed from all the JavaScript Code

//Global Function which can be accessed from all the JavaScript Code

function b(){
    //Logs the message to console
    console.log('Called b!');
}



var b1 = 'Hello World Again!';

function f1(){
    console.log('Called f1')
}

f1();
console.log(b1)