var screws250 = 71;
var screws500 = 115;
var merbauW = 0.09;
var merbauP = 4.98;
var pineW = 0.09;
var pineL = 5.4;
var pineP = 12.67 / pineL;
var ekoDeckW = 0.088;
var ekoDeckL = 5.4;
var ekoDeckP = 46.45 / ekoDeckL;
var tax = 1.1;
var delivery = 200;
var mod = 2.5;

function deckSize(){
	var dLength = document.getElementById("prodLen").value;
	var dWidth = document.getElementById("prodWid").value;

	calcMerbau(dLength, dWidth)
	calcPine(dLength, dWidth)
	calcEkoDeck(dLength, dWidth)
}

function calcMerbau(l, w) {
	var dPrice = 0;
	/*Calculate Price*/	
	if(l*w <= 15 && l*w > 0)
	{
		dPrice = ((((w/merbauW)*(l)*merbauP)+delivery+screws250)*tax)*mod;
	}
	if(l*w > 15)
	{
		dPrice = ((((w/merbauW)*(l)*merbauP)+delivery+screws500)*tax)*mod;
	}	
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/
	document.getElementById("merbau").innerHTML = l*w + " &#109;&sup2;" + " = " + "$" + dOutput;
}

function calcPine(l, w) {
	var dPrice = 0;

	if(l*w <= 15 && l*w > 0)
	{
		dPrice = ((((w/pineW)*(l)*pineP)+delivery+screws250)*tax)*mod;
	}
	if(l*w > 15)
	{
		dPrice = ((((w/pineW)*(l)*pineP)+delivery+screws500)*tax)*mod;
	}	
	var dOutput = dPrice.toFixed(2);

	document.getElementById("pine").innerHTML = l*w + " &#109;&sup2;" + " = " + "$" + dOutput;
}

function calcEkoDeck(l, w) {
	var dPrice = 0;

	if(l*w <= 15 && l*w > 0)
	{
		dPrice = ((((w/ekoDeckW)*(l)*ekoDeckP)+delivery+screws250)*tax)*mod;
	}
	if(l*w > 15)
	{
		dPrice = ((((w/ekoDeckW)*(l)*ekoDeckP)+delivery+screws500)*tax)*mod;
	}	
	var dOutput = dPrice.toFixed(2);
	
	document.getElementById("ekodeck").innerHTML = l*w + " &#109;&sup2;" + " = " + "$" + dOutput;
}

function calcProd4() {
	/*Get dimentions*/
	var dLength = document.getElementById("prod4Len").value;
	var dWidth = document.getElementById("prod4Wid").value;
	/*Calculate Price*/	
	var dPrice = dLength*dWidth;
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/	
	document.getElementById("prod4Cost").innerHTML = l*w + " &#109;&sup2;" + " = " + "$" + dOutput;
}

function calcProd5() {
	/*Get dimentions*/
	var dLength = document.getElementById("prod5Len").value;
	var dWidth = document.getElementById("prod5Wid").value;
	/*Calculate Price*/	
	var dPrice = dLength*dWidth;
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/	
	document.getElementById("prod5Cost").innerHTML = l*w + " &#109;&sup2;" + " = " + "$" + dOutput;
}

function calcProd6() {
	/*Get dimentions*/
	var dLength = document.getElementById("prod6Len").value;
	var dWidth = document.getElementById("prod6Wid").value;
	/*Calculate Price*/	
	var dPrice = dLength*dWidth;
	var dOutput = dPrice.toFixed(2);
	/*Display Price*/	
	document.getElementById("prod6Cost").innerHTML = l*w + " &#109;&sup2;" + " = " + "$" + dOutput;
}

/*Gallery!*/
var modal = document.getElementById('modalDisp');
var galImg = document.getElementById('modalImg'); 								/*select the <img> tag for use later*/
var captionText = document.getElementById("imgCaption"); 						/*select the caption div for use later*/
var slides = document.getElementsByClassName("im-single"); 						/*create an index of slides*/
var slideIndex = 0;																/*Keep track of the current slide*/

function selectImg(n) { 														/*when image clicked, take the slide number from html*/
	slideIndex = n;																/*is used when changing slide*/
	if(modal.style.display = "none")											/*avoid doing the next step for no reason*/
	{
		showModal()																/*show the gallery*/
	}
	galImg.src = slides[n].children[0].src.replace(".jpg", "_HR.jpg");			/*set the gallery <img> tag to the _HR.jpg (hi rez) varient of an image */
	captionText.innerHTML =  slides[n].children[0].alt + " " + slideIndex;		/*set caption to the image's alt="text"*/
	if(galImg.complete == false)												/*check if image is loaded*/
	{
		document.getElementById("loading").style.display = "block";
	}
	galImg.addEventListener("load", function(){
		document.getElementById("loading").style.display = "none";
	});
}

function nextSlide() {															/*do i need to explain this? checks we aren't at an index that would result in null*/
	if(slideIndex <= (slides.length - 1))
	{
	slideIndex = slideIndex + 1;												/*add 1 to slideIndex (to get the next slide later)*/
		if(slideIndex == slides.length)
		{
		slideIndex = 0;															/*if we went outside the boundry, start from the beginning*/
		}
	}
	selectImg(slideIndex)														/*show the image relating to the new slideIndex value*/
}

function prevSlide() {															/*same as above really*/
	if(slideIndex >= 0)
	{
	slideIndex = slideIndex - 1;
		if(slideIndex < 0)
		{
		slideIndex = slides.length - 1;
		}
	}
	selectImg(slideIndex)
}

function showModal() {
  modal.style.display = "block";

}

function hideModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}