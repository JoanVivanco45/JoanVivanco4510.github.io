window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("abajo", window.scrollY>0);
})
let sliderInner = document.querySelector(".slider--inner");

let images = sliderInner.querySelectorAll("img");

let index = 1;
setInterval(function () {
	let porcentage = index * -100;
	sliderInner.style.transform = "translateX("+ porcentage +"%)";
	index++;
	if (index > images.length - 1) {
		index = 0;
	}
},5000);