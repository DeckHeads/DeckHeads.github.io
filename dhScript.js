var screws250 = 71;
var screws500 = 115;
var merbauW = 0.09;
var merbauP = 4.77;
var tax = 1.1;
var delivery = 200;
var mod = 2.2;

function calcProd1() {
	var dPrice = 0;
	/*Get dimentions*/
	dLength = document.getElementById("prod1Len").value;
	dWidth = document.getElementById("prod1Wid").value;
	/*Calculate Price*/	
	if(dLength*dWidth <= 15 && dLength*dWidth > 0)
	{
		dPrice = ((((dWidth/merbauW)*(dLength)*merbauP)*tax)+delivery+screws250)*mod;
	}
	if(dLength*dWidth > 15)
	{
		dPrice = ((((dWidth/merbauW)*(dLength)*merbauP)*tax)+delivery+screws500)*mod;
	}	
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/
	document.getElementById("prod1Cost").innerHTML = "$" + dOutput;
}

function calcProd2() {
	/*Get dimentions*/
	var dLength = document.getElementById("prod2Len").value;
	var dWidth = document.getElementById("prod2Wid").value;
	/*Calculate Price*/	
	var dPrice = dLength*dWidth;
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/	
	document.getElementById("prod2Cost").innerHTML = "$" + dOutput;
}

function calcProd3() {
	/*Get dimentions*/
	var dLength = document.getElementById("prod3Len").value;
	var dWidth = document.getElementById("prod3Wid").value;
	/*Calculate Price*/	
	var dPrice = dLength*dWidth;
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/	
	document.getElementById("prod3Cost").innerHTML = "$" + dOutput;
}

function calcProd4() {
	/*Get dimentions*/
	var dLength = document.getElementById("prod4Len").value;
	var dWidth = document.getElementById("prod4Wid").value;
	/*Calculate Price*/	
	var dPrice = dLength*dWidth;
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/	
	document.getElementById("prod4Cost").innerHTML = "$" + dOutput;
}

function calcProd5() {
	/*Get dimentions*/
	var dLength = document.getElementById("prod5Len").value;
	var dWidth = document.getElementById("prod5Wid").value;
	/*Calculate Price*/	
	var dPrice = dLength*dWidth;
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/	
	document.getElementById("prod5Cost").innerHTML = "$" + dOutput;
}

function calcProd6() {
	/*Get dimentions*/
	var dLength = document.getElementById("prod6Len").value;
	var dWidth = document.getElementById("prod6Wid").value;
	/*Calculate Price*/	
	var dPrice = dLength*dWidth;
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/	
	document.getElementById("prod6Cost").innerHTML = "$" + dOutput;
}