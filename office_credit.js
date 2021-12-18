"use strict";

/*
   Name: Chevy Rios
   
   Filename: office_credit.js
*/
window.addEventListener("load", function () {
    var orderData = location.search.slice(1);
    orderData = orderData.replace(/\+/g, " ");
    orderData = decodeURIComponent(orderData);

    var formFields = orderData.split(/[&=]/g);

    document.forms.order.elements.orderDate.value = formFields[1];
    document.forms.order.elements.modelName.value = formFields[5];
    document.forms.order.elements.qty.value = formFields[7];
    document.forms.order.elements.initialCost.value = formFields[9];
    document.forms.order.elements.shippingType.value = formFields[11];
    document.forms.order.elements.shippingCost.value = formFields[13];
    document.forms.order.elements.subtotal.value = formFields[17];
    document.forms.order.elements.salesTax.value = formFields[19];
    document.forms.order.elements.totalCost.value = formFields[21];
});

window.addEventListener("load", function () {
    document.getElementById("subButton").onclick = runSubmit;
    document.getElementById("cardHolder").oninput = validateName;
    document.getElementById("cardNumber").oninput = validateNumber();
    document.getElementById("expDate").oninput = validateDate();
    document.getElementById("cvc").oninput = validateCVC();
});

function runSubmit() {
    validateName();
    validateCredit();
    validateNumber();
    validateDate();
    validateCVC();
}

function validateDate() {
    var cardDate = document.getElementById("expDate");
    if (cardDate.validity.valueMissing) {
        cardDate.setCustomValidity("Enter the expiration date");
    } else if (expDate != test(/^(0[1-9]|1[0-2])\/20[12]\d$/)) {
        cardDate.setCustomValidity("Enter a valid expiration date")
    } else {
        cardName.setCustomValidity("");
    }
}

function validateName() {
    var cardName = document.getElementById("cardHolder");
    if (cardName.validity.valueMissing) {
        cardName.setCustomValidity("Enter the card holder");
    } else {
        cardName.setCustomValidity("");
    }
}

function validateCredit() {
    var creditCard = document.forms.credit.elements.company[0];
    if (creditCard.validity.valueMissing) {
        creditCard.setCustomValidity("Select your credit card");
    } else {
        creditCard.setCustomValidity("");
    }
}

function validateNumber() {
    var cardNumber = document.getElementById("cardNumber");
    if (cardNumber.validity.valueMissing) {
        cardNumber.setCustomValidity("Enter your card number");
    } else if (cardNumber.validity.patternMismatch) {
        cardNumber.setCustomValidity("Enter a valid card number");
    } else if (luhn(cardNumber.value) === false) {
        cardNumber.setCustomValidity("Enter a legitimate card number");
    } else {
        cardNumber.setCustomValidity("");
    }
}

function validateCVC() {
    var cardCVC = document.getElementById("cvc");
    var creditCard = document.querySelector('input[name="company"]:checked').value;

    if (cardCVC.validity.valueMissing) {
        cardCVC.setCustomValidity("Enter your code CVC number");
    } else if ((creditCard === "amex") && (/^\d{4}$/.test(cardCVC.value) === false)) {
        cardCVC.setCustomValidity("Enter a 4-digit CVC number");
    } else if ((creditCard !== "amex") && (/^\d{3}$/.test(cardCVC.value) === false)) {
        cardCVC.setCustomValidity("Enter a 3-digit CVC number");
    } else {
        cardCVC.setCustomValidity("");
    }
}

function sumDigits(numStr) {
    var digitTotal = 0;
    for (var i = 0; i < numStr.length; i++) {
        digitTotal += parseInt(numStr.charAt(i));
    }
    return digitTotal;
}

function luhn(idNum) {
    var string1 = "";
    var string2 = "";

// Retrieve the odd-numbered digits
for (var i = idNum.length - 1; i >= 0; i -= 2) {
    string1 += idNum.charAt(i);
}
// Retrieve the even-numbered digits and double them
for (var i = idNum.length - 2; i >= 0; i -= 2) {
    string2 += 2 * idNum.charAt(i);
}

// Return whether the sum of the digits is divisible by 10
    return sumDigits(string1 + string2) % 10 === 0;
}