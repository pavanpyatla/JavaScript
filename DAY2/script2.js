let counterElement = document.getElementById("counterValue");

function onIncrement(){
    let prevValue = counterElement.textContent;
    let updateValue = parseInt(prevValue) + 1;

    if (updateValue> 0){
        counterElement.style.color = "green";
    }
    else if(updateValue < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "black";
    }

    counterElement.textContent = updateValue;


}

function onDecrement(){
    let prevValue = counterElement.textContent;
    let updateValue = parseInt(prevValue) - 1;

    if (updateValue> 0){
        counterElement.style.color = "green";
    }
    else if(updateValue < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "black";
    }
    counterElement.textContent = updateValue;
}


function onReset(){
    let countValue = 0;
    counterElement.textContent = countValue;
    counterElement.style.color = "black";
}