
function validateForm() {
    event.preventDefault();
    validateName();
}

function validateName() {
    let re = /^[A-Za-z]+$/;

    if(document.signupForm.name.value == "") {

        return false;
    }

    if(!re.test(document.signupForm.name.value)) {

        return false;
    }

    return true;
}