"use strict";

/*
   Name: Chevy Rios

   Filename: office_cart.js
   
*/ 
window.addEventListener("load", function () {
    calcCart();
    cart.elements.modelQty.onchange = calcCart;

    var shippingOptions = document.querySelectorAll('input[name="shipping"]');
    for (var i = 0; i < shippingOptions.length; i++) {
        shippingOptions[i].onclick = calcCart;
    }
});

function calcCart() {
    var orderForm = document.forms.cart;

    //Calculate the initial cost of the order
    var cost = orderForm.elements.modelCost.value;
    var quantity = orderForm.elements.modelQty.value;

    var orderCost = cost * quantity;

    orderForm.elements.orderCost.value = formatUSCurrency(orderCost);

    //Retrieve the cost of the protection plan
    var shipCost = document.querySelector('input[name="shipping"]:checked').value * quantity;
    orderForm.elements.shippingCost.value = formatNumber(shipCost, 2);

    //Calculate the order sub total
    orderForm.elements.subTotal.value = formatNumber(orderCost * 1 + shipCost * 1, 2);

    //Calculate sales tax
    var salesTax = 0.05 * (orderCost * 1 + shipCost * 1);
    orderForm.elements.salesTax.value = formatNumber(salesTax, 2);

    //Calculate the order total
    var totalCost = orderCost * 1 + shipCost * 1 + salesTax * 1;
    orderForm.elements.cartTotal.value = formatUSCurrency(totalCost);

    orderForm.elements.shippingType.value =
        document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;
}

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
