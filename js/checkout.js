// Get the input fields
var password = document.getElementById("fPassword");
var phone = document.getElementById('fPhone');
var email = document.getElementById('fEmail');
var firstName = document.getElementById('fName');
var surname = document.getElementById('fLastN');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorPhone = document.getElementById('errorPhone');
var errorEmail = document.getElementById('errorEmail');

//Patterns
let patternWordNumbers = /([0-9][A-z]|[A-z][0-9])/g;
let patternPhone = /^[0-9]+$/g;
let patternNames = /^[A-z]+$/g;
let patternCaracteresIncorrectos = /([\W]|[_])/g;
let minimumLength = 3;
let patternEmail = /^\w+@\w+(\w|\.)+\.\w+$/g;

//Test Cart
var cart = [
    {
        "id": 3,
        "name": "Ultima Nature",
        "price": 5,
        "type": "grocery",
        "offer": {
            "number": 10,
            "unidad": 3.333
        },
        "quantity": 1,
        "subTotal": null
    },
    {
        "id": 2,
        "name": "Ultima Adult",
        "price": 6.25,
        "type": "grocery",
        "quantity": 2,
        "subTotal": null
    },
    {
        "id": 1,
        "name": "Advance Hairball",
        "price": 10.5,
        "type": "grocery",
        "offer": {
            "number": 3,
            "unidad": 10
        },
        "quantity": 1,
        "subTotal": null
    }
];
calculateTotal();
printCart();

// Exercise 6
function validate(event) {
    event.preventDefault();
    if (surname.value.length >= minimumLength &&
        surname.value.match(patternNames) != null &&
        firstName.value.match(patternNames) != null &&
        firstName.value.length >= minimumLength) {
        errorName.style.display = 'none'
    } else {
        errorName.style.display = 'block'
    }

    if (email.value.length >= minimumLength &&
        email.value.match(patternEmail) != null) {
        errorEmail.style.display = 'none'

    } else {
        errorEmail.style.display = 'block'
    }

    if (phone.value.length >= minimumLength &&
        phone.value.match(patternPhone) != null) {
        errorPhone.style.display = 'none'
    } else {
        errorPhone.style.display = 'block'
    }

    if (password.value.length >= minimumLength &&
        password.value.match(patternCaracteresIncorrectos) == null &&
        password.value.match(patternWordNumbers) != null) {
        errorPassword.style.display = 'none'
    } else {
        errorPassword.style.display = 'block'
    }
}
