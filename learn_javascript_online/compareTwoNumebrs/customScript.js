var firstNumber,secondNumber

firstNumber = prompt("Enter First Number");

secondNumber = prompt("Enter Second Number");

if(firstNumber > secondNumber){
    document.write("Larger Number of "+firstNumber +" and " +secondNumber +" is " +firstNumber);
    
}else if(firstNumber < secondNumber) {
    document.write("Larger Number of " +firstNumber +" and " + secondNumber +" is " +secondNumber);
} else if (isNaN(firstNumber) || isNaN(secondNumber)){
    document.write("Please Enter Numerical Values");
}else{
    document.write("Numbers " +firstNumber +" and " +secondNumber +" are equal ");
}