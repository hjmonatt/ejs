let form = document.getElementById("heeHaw");
form.onsubmit=validate;

function clearErrors(){
    let errors = document.getElementsByClassName("text-warning");
    for(let i=0; i<errors.length; i++){
        errors[i].classList.add("d-none");
    }

}

function validate(){

    clearErrors();

//Create an error flag
    let isValid = true;

    //Validate steps
    let steps = document.getElementById("steps").value;
    if (steps =="" || steps <= 0 || /\D/.test(steps)){
        let errSteps = document.getElementById("err-steps");
        errSteps.classList.remove("d-none");
        isValid = false;
    }

    return isValid;
}

// heeHaw() function
function heeHaw() {
    let steps = document.getElementById("steps").value;
    for (let current = 1; current <= steps; current++) {
        if (current % 3 == 0 && current % 5 == 0) {
            document.write("Hee Haw! <br><br>");
        } else if (current % 5 == 0) {
            document.write("Haw! <br><br>");
        } else if (current % 3 == 0) {
            document.write("Hee! <br><br>");
        } else {
            document.write(current + " <br><br>");
        }

    }
}

