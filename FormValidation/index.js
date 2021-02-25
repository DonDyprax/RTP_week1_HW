const userName = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmPass');
const phoneNumber = document.getElementById('phoneNumber');
const website = document.getElementById('website');
const age = document.getElementById('age');
const experience = document.getElementById('experience');


function validateForm() {
    event.preventDefault();
    
    if(checkInputs()) {
        return true;
    } else {
        return false;
    }
}

function checkInputs() {
    let info = {};

    if(validateName()) {
        info['name'] = document.signupForm.name.value;
    }
    if(validateLastname()) {
        info['lastname'] = document.signupForm.lastname.value;
    }
    if(validateEmail()) {
        info['email'] = document.signupForm.email.value;
    }

    validatePasswords();

    if(validatePhoneNumber()) {
        info['phoneNumber'] = document.signupForm.phoneNumber.value;
    }
    if(validateAge()) {
        info['age'] = document.signupForm.age.value;
    }
    if(validateWebsite()) {
        info['website'] = document.signupForm.website.value;
    }

    switch(document.signupForm.experience.value) {
        case "0":
            info['experience'] = 'none';
            break;
        case "1":
            info['experience'] = 'low';
            break;
        case "2":
            info['experience'] = 'medium';
            break;
        case "3":
            info['experience'] = 'advanced';
            break;
        case "4":
            info['experience'] = 'high';
            break;
    }

    if(info == {}) {
        return false;
    } else {
        console.log(info);
        return true;
    }
}

function setSuccess(input) {
	const fieldWrapper = input.parentElement;

    if(input == email || input == phoneNumber || input == website) {
        fieldWrapper.className = 'field-wrapper success full-width';
    } else {
        fieldWrapper.className = 'field-wrapper success';
    }
}

function setError(input, msg) {
	const fieldWrapper = input.parentElement;
	const small = fieldWrapper.querySelector('small');

    if(input == email || input == phoneNumber || input == website) {
        fieldWrapper.className = 'field-wrapper error full-width';
    } else {
        fieldWrapper.className = 'field-wrapper error';
    }
	
	small.innerText = msg;
}

function validateName() {
    let re = /^[A-Za-z]+$/;

    if(document.signupForm.name.value == "") {
        setError(userName, '*Name cannot be blank.')
        return false;
    }

    if(!re.test(document.signupForm.name.value)) {
        setError(userName, '*Name should only contain letters.')
        return false;
    }

    setSuccess(userName);
    return true;
}

function validateLastname() {
    let re = /^[A-Za-z]+$/;

    if(document.signupForm.lastname.value == "") {
        setError(lastname, '*Lastname cannot be blank.')
        return false;
    }

    if(!re.test(document.signupForm.lastname.value)) {
        setError(lastname, '*Lastname should only contain letters.')
        return false;
    }

    setSuccess(lastname);
    return true;
}

function validateEmail() {
    let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if(document.signupForm.email.value == "") {
        setError(email, '*Email cannot be blank.');
        return false;
    }

    if(!re.test(document.signupForm.email.value)) {
        setError(email, '*Please enter a valid email address.');
        return false;
    }
    
    setSuccess(email);
    return true;
}

function validatePasswords() {

    if(matchingPasswords()) {
        setSuccess(password);
        setSuccess(confirmPass);
        return true;
    } else {
        if(!matchingPasswords()) {
            setError(confirmPass, '*Passwords do not match.');
        }

        if(document.signupForm.password.value != "") {
            setSuccess(password);
        }

        if(document.signupForm.password.value == "") {
            setError(password, '*Password cannot be blank.');
            setError(confirmPass, '*Passwords do not match.')
        }

        return false;
    }

}

function matchingPasswords() {
    if((document.signupForm.password.value == document.signupForm.confirmPass.value) && (document.signupForm.password != "") && (document.signupForm.confirmPass.value != "")) {
        return true;
    } else {
        return false;
    }
}

function validatePhoneNumber() {
    let re = /^[0-9]{4}-[0-9]{4}$/;

    if(document.signupForm.phoneNumber.value == "") {
        setError(phoneNumber, '*Phone number cannot be blank.');
        return false;
    }

    if(!re.test(document.signupForm.phoneNumber.value)) {
        setError(phoneNumber, '*Phone number should follow format: XXXX-XXXX.')
        return false;
    }

    if(re.test(document.signupForm.phoneNumber.value)) {
        setSuccess(phoneNumber);
    }

    return true;
}

function validateAge() {
    let re = /^[0-9]+$/;

    if(!re.test(document.signupForm.age.value)) {
        setError(age, '*Age has to be a number.');
        return false;
    }

    setSuccess(age);
    return true;
}

function validateWebsite() {
    let re = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if(document.signupForm.website.value == "") {
        setError(website, '*Website cannot be blank.');
        return false;
    }

    if(!re.test(document.signupForm.website.value)) {
        setError(website, '*Please enter a valid URL address.');
        return false;
    }

    setSuccess(website);
    return true;
}
