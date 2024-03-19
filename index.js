const fullNameInput = document.getElementById("fullname")
const theOnlyEmailInput = document.getElementById("theEmail")
const phoneNumberInput = document.getElementById("phonenumber")
const thePasswordInput = document.getElementById("password")
const fullNameAlert = document.getElementById("enter-fullname-alert")
const emailUserAlert = document.getElementById("enter-email-alert")
const phoneNumberAlert = document.getElementById("enter-phonenumber-alert")
const passwordAlert = document.getElementById("enter-password-alert")
const proceedButton = document.getElementById("button")


function validateFullNameInput(){
    let fullDeclareName = fullNameInput.value
    if(fullDeclareName.length == 0){
        fullNameAlert.innerText = "Enter your full name"
        fullNameAlert.style.fontSize = "0.5rem"
        fullNameInput.style.outline = "1px solid red"
    }else if(!fullDeclareName.match(/^[^\d]*$/)){
        fullNameAlert.innerText = "Text only"
        fullNameAlert.style.fontSize = "0.5rem"
        fullNameInput.style.outline = "1px solid red"
        fullNameInput.style.border = "none"
    }else{
        fullNameAlert.innerText = " "
        fullNameInput.style.outline = "1.5px solid green"
    }

}

fullNameInput.addEventListener("keyup", function(){
    validateFullNameInput()
})


function validatetheOnlyEmailInput(){
    let enterEmail = theOnlyEmailInput.value
    if(enterEmail.length == 0){
        emailUserAlert.innerText = "Enter a email address"
        theOnlyEmailInput.style.border = "none"
        theOnlyEmailInput.style.outline = "1px solid red"
        emailUserAlert.style.fontSize = "0.5rem"
    }else if(!enterEmail.match(/^[\w.%+-]+@(?:[\w-]+\.)+[a-zA-Z]{2,}$/)){
        // emailUserAlert.innerText = "Enter a valid email address"
        emailUserAlert.style.fontSize = "0.5rem"
        theOnlyEmailInput.style.outline = "1px solid red"
        theOnlyEmailInput.style.border = "none"
        emailUserAlert.innerText = " "
    }else{
        theOnlyEmailInput.innerText = " "
        theOnlyEmailInput.style.outline = "1px solid green"
        theOnlyEmailInput.style.border = "none"
    }

}

theOnlyEmailInput.addEventListener("keyup", function(){
    validatetheOnlyEmailInput()
})


function validatePhoneNumber(){
    let phoneNumberAscertain = phoneNumberInput.value
    if(phoneNumberAscertain.length !== 11) {
        phoneNumberAlert.innerText = "Your phone number must be 11 digits";
        phoneNumberInput.style.border = "none";
        phoneNumberInput.style.outline = "1px solid red";
        phoneNumberAlert.style.fontSize = "0.5rem";
    } else {
        phoneNumberAlert.innerText = "";
        phoneNumberInput.style.border = "none";
        phoneNumberInput.style.outline = "1px solid green";
    }
}



phoneNumberInput.addEventListener("keyup", function(){
    validatePhoneNumber()

})


function validatePassword() {
    let passwordConfirmation = thePasswordInput.value;
    if(passwordConfirmation.length < 8){
        passwordAlert.innerText = "Password too short"
        passwordAlert.style.fontSize = "0.5rem"
        thePasswordInput.style.border = "none"
        thePasswordInput.style.outline = "1px solid red"
    }else if (!passwordConfirmation.match(/\w/)){
        passwordAlert.innerText = "Please use at least one character";
        passwordAlert.style.fontSize = "0.5rem";
        thePasswordInput.style.border = "none";
        thePasswordInput.style.outline = "1px solid red";
    } else{
        passwordAlert.innerText = " ";
        passwordAlert.style.fontSize = "0.5rem";
        thePasswordInput.style.outline = "1px solid green";
    }
}

thePasswordInput.addEventListener("keyup", function(){
    validatePassword()
})

function validationForButton(){
    if(!validateFullNameInput() || !validatetheOnlyEmailInput() || !validatePhoneNumber() || !validatePassword()){
        console.log("Fill all data correctly")

    }
}

proceedButton.addEventListener("click", function(){
    validationForButton()
})