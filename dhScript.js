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

/*Gallery!*/
var galImg = document.getElementById('modalImg'); 								/*select the <img> tag for use later*/
var captionText = document.getElementById("imgCaption"); 						/*select the caption div for use later*/
var slides = document.getElementsByClassName("im-single"); 						/*create an index of slides*/
var slideIndex = 0;																/*Keep track of the current slide*/

function selectImg(n) { 														/*when image clicked, take the slide number from html*/
	slideIndex = n;																/*is used when changing slide*/
	if(document.getElementById('modalDisp').style.display = "none")				/*avoid doing the next step for no reason*/
	{
		showModal()																/*show the gallery*/
	}
	galImg.src = slides[n].children[0].src.replace(".jpg", "_HR.jpg");			/*set the gallery <img> tag to the _HR.jpg (hi rez) varient of an image */
	captionText.innerHTML =  slides[n].children[0].alt + " " + slideIndex;		/*set caption to the image's alt="text"*/
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
  document.getElementById('modalDisp').style.display = "block";
}

function hideModal() {
  document.getElementById('modalDisp').style.display = "none";
}