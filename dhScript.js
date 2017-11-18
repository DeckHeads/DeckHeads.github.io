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
var gumW = 0.135;
var gumP = 10.98;

var tax = 1.1;
var delivery = 200;
var mod = 2.5;

/*Products*/
function deckSize(){
	var dLength = document.getElementById("prodLen").value;
	var dWidth = document.getElementById("prodWid").value;
	var merbauDisplay =  document.getElementById("merbau");
	var ekodeckDisplay = document.getElementById("ekodeck");
	var pineDisplay = document.getElementById("pine");
	var gumDisplay = document.getElementById("mixausgum");
	var orgDisplay = document.getElementById("organoil");
	var acrylDisplay = document.getElementById("acrylic");

	merbauDisplay.innerHTML = calcPrice(dLength, dWidth, merbauW, merbauP)
	ekodeckDisplay.innerHTML = calcPrice(dLength, dWidth, ekoDeckW, ekoDeckP)
	pineDisplay.innerHTML = calcPrice(dLength, dWidth, pineW, pineP)
	gumDisplay.innerHTML = calcPrice(dLength, dWidth, gumW, gumP)
	orgDisplay.innerHTML = calcPrice(dLength, dWidth, pineW, pineP)
	acrylDisplay.innerHTML = calcPrice(dLength, dWidth, pineW, pineP)
}
/* Calculate Price*/
function calcPrice(l, w, prodW, price) {
	var dPrice = 0;
	var sqM = (l*w).toFixed(2);

	if(l*w <= 15 && l*w > 0)
	{
		dPrice = ((((w/prodW)*(l)*price)+delivery+screws250)*tax)*mod;
	}
	if(l*w > 15)
	{
		dPrice = ((((w/prodW)*(l)*price)+delivery+screws500)*tax)*mod;
	}	
	var dOutput = dPrice.toFixed(2);

	return (sqM + "&#109;&sup2;" + " = " + "$" + dOutput);
}

/*Gallery*/
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
	captionText.innerHTML =  slides[n].children[0].alt;							/*set caption to the image's alt="text"*/
	if(galImg.complete == false)												/*check if image is loaded*/
	{
		document.getElementById("loading").style.display = "block";
	}
	galImg.addEventListener("load", function(){
		document.getElementById("loading").style.display = "none";
	});
}
/*Change Slide Forward*/
function nextSlide() {															
	if(slideIndex <= (slides.length - 1))										/*do i need to explain this? checks we aren't at an index that would result in null*/
	{
	slideIndex = slideIndex + 1;												/*add 1 to slideIndex (to get the next slide later)*/
		if(slideIndex == slides.length)
		{
		slideIndex = 0;															/*if we went outside the boundry, start from the beginning*/
		}
	}
	selectImg(slideIndex)														/*show the image relating to the new slideIndex value*/
}
/*Change Slide Backward*/
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
/*Show the gallery large image*/
function showModal() {
  modal.style.display = "block";

}
/*Hide the gallery large image*/
function hideModal() {
  modal.style.display = "none";
}
/*Hide the gallery large image when clicking outside of the image area*/
window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}