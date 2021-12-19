"use strict";

/*
   Name: Chevy Rios

   Filename: office_cart.js
   
*/
window.addEventListener("load", function () {
    var orderForm = document.forms.orderForm;
    orderForm.elements.orderDate.value = new Date().toDateString();

    orderForm.elements.model.focus();

    calcOrder();

    //Event handler for the web form
    orderForm.elements.model.onchange = calcOrder;
    orderForm.elements.qty.onchange = calcOrder;

    var shipOptions = document.querySelectorAll('input[name="shipping"]');

    var shipOptions = document.querySelectorAll('input[name="shipping"]');
    for (var i = 0; i < shipOptions.length; i++) {
        shipOptions[i].onclick = calcOrder;
    }
});

function calcOrder() {
    var orderForm = document.forms.orderForm;

    //Calculate the initial cost of the order
    var mIndex = orderForm.elements.model.selectedIndex;
    //alert(mIndex);
    var mCost = orderForm.elements.model.options[mIndex].value;
    //alert(mCost);
    var qIndex = orderForm.elements.qty.selectedIndex;
    //alert(qIndex);
    var quantity = orderForm.elements.qty[qIndex].value;
    //alert(quantity);
    var initialCost = mCost * quantity;

    orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

    //Retrieve the cost of the protection plan
    var shipCost = document.querySelector('input[name="shipping"]:checked').value;
    orderForm.elements.shippingCost.value = formatNumber(shipCost, 2);

    //Calculate the order sub total
    orderForm.elements.subtotal.value = formatNumber(initialCost * 1 + shipCost * 1, 2);

    //Calculate sales tax
    var salesTax = 0.05 * (initialCost * 1 + shipCost * 1);
    orderForm.elements.salesTax.value = formatNumber(salesTax);

    //Calculate the order total
    var totalCost = initialCost * 1 + shipCost * 1 + salesTax * 1;
    orderForm.elements.totalCost.value = formatUSCurrency(totalCost);

    orderForm.elements.modelName.value = orderForm.elements.model.options[mIndex].text;

    orderForm.elements.shippingType.value =
        document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;

    var image = document.getElementById('merchImg');
    if (mIndex == 0) {
        image.src = "award.jpg";
    }
    else if (mIndex == 1) {
        image.src = "img1.png";
    }
		else if (mIndex == 2) {
        image.src = "mug.jfif";
    }
		else if (mIndex == 3) {
        image.src = "pillow.jfif";
		}
		else if (mIndex == 4) {
        image.src = "hat.jfif";
		}
		else if (mIndex == 5) {
        image.src = "stickers.jpg";
    }
}

function changeImage(img) {
    img.src = img.src.replace("_t", "_b");
}

function formatNumber(val, decimals) {
    return val.toLocaleString(undefined,
        {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
}

function formatUSCurrency(val) {
    return val.toLocaleString('en-US',
        {
            style: "currency",
            currency: "USD"
        });
}
