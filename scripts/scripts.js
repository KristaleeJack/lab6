/****************** YOUR NAME: Kristalee Jack 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
// setting vairables 
let model_name = "XYZ";
let duration = 0;


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

function recalculate(){
    let cost_label = document.getElementById("calculated-cost");
    // if model name is set to XYZ when we click
    if (model_name === "XYZ") {
        cost_label.innerHTML = duration * 100;
    }
        
    else if (model_name === "CPRG") {
        cost_label.innerHTML = duration * 213;
    }
}





/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */


// INSERT YOUR CODE HERE


let switch_model = document.getElementById("model-button");
function changeModel() {
    let switch_text = document.getElementById("model-text");

    if (model_name === "XYZ") {
        model_name = "CPRG";
        switch_text.innerHTML = "Model CPRG";
    }
    else if (model_name === "CPRG") {
        model_name = "XYZ";
        switch_text.innerHTML = "Model XYZ";
    }
    recalculate()

}


/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/


// INSERT YOUR CODE HERE


// setting span element via ID and saving it to change_button variable 
let change_button = document.getElementById("duration-button");
function changeDuration(){
    let duration_text = document.getElementById("duration-text");
    // when clicking on duration button enter new duration text pops up 
    duration = prompt("Enter new duration: ");
    // set duration text to input from user then recalculate
    duration_text.innerHTML = duration;
    recalculate();
}


window.onload = function() {  // when the window loads the buttons begin listing for "click" event
    change_button.addEventListener("click", changeDuration);
    switch_model.addEventListener("click", changeModel);
}
