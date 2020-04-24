function showimage()
{
	var img = document.getElementByClassName('vect');
	var i;
	for (var i = 0; i < img.length; i++) {
		img[i].style.display = "none";
	}
}