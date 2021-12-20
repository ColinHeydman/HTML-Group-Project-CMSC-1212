"use strict";

/*
   Blayne Carlson   
   
   Filename: merchandise.js

   
*/

window.addEventListener("load", function(){
	var orderForm = document.forms.orderForm;
	orderForm.elements.orderDate.value = new Date().toDateString();
	
	orderForm.elements.model.focus();
	
	calcOrder();
	//Event handlers for the web format
	orderForm.elements.model.onchange = calcOrder;
	orderForm.elements.qty.onchange = calcOrder;
	
	var planOption = document.querySelectorAll('input[name="protection"]');
	for(var i = 0; i < planOptions.length; i++){
		planOptions[i].onclick = calcOrder;
	}
	
});

function calcOrder(){
	var orderForm = document.forms.orderForm;
	
	// calculate the initial cost of the order
	var mIndex = orderForm.elements.model.selectedIndex;
// alert(mIndex);
	var mCost = orderForm.elements.model.options[mIndex].value;
// alert(mCost);
	var qIndex = orderForm.elements.qty.selectedIndex;
// alert(qIndex);
	var quantity = orderForm.elements.qty[qIndex].value;
// alert(quantity);
	var initialCost = mCost * quantity;
	
	orderForm.elements.initialCost.value = formatUSCurrency(initialCost);
	
	//Retrieve the cost of the protection plan
	
	var pCost = document.querySelector('input[name="protection"]:checked').value;
	orderForm.elements.protectionCost.value = formatNumber(pCost, 2);
	
	// Calculate the order sub total
	orderForm.elements.subtotal.value = formatNumber(initialCost*1 + pCost*1, 2);
	
	// Calcualte sales tax
	
	var salesTax = 0.05*(initialCost*1 + pCost*1);
	orderForm.elements.salesTax.value = formatNumber(salesTax, 2);
	
	//Calcualte the order total
	var totalCost = initialCost*1 + pCost*1 + salesTax*1;
	orderForm.elements.totalCost.value = formatUSCurrency(totalCost);
	
	orderForm.elements.modelName.value = orderForm.elements.model.options.[mIndex].text;
	
	orderForm.elements.protectionName.value 
	= document.querySelector('input[name="protection"]:checked').nextSibling.nodeValue;
	
}
function formatNumber(val, decimals){
	return val.toLocaleString(undefined,
	{minimumFractionDigits: decimals,
	 maximumFractionDigits: decimals}
	);
	
}
function formatUSCurrency(val){
	return val.toLocaleString('en-US',
	{style: "currency",
	currency: "USD"});
}









