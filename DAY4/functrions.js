// we have two types of functions in JS


// 1. Function declaration
function showMessage(){
    console.log("Welcome to JS Functions");
}
showMessage();  // it will show output and calling function



// 2. Function expression
let greet = function(){
    console.log("Hello everyone");
}
greet();  //function expression also gives output but in the case of function expression we cannot call it before it is defined
