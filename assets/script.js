const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlideShowIndex = 0

document.addEventListener("DOMContentLoaded", () => {
	const dotsContainerElement = document.querySelector("#banner .dots");

	const dotElements = slides.map((_slide, index) => {
		const el = document.createElement("span")
		el.classList.add("dot")

		if (index == currentSlideShowIndex) {
			el.classList.add("dot_selected")
		}

		dotsContainerElement.appendChild(el);

		return el;
	})

	const [arrowL, arrowR] = document.querySelectorAll("#banner button.arrow");

	arrowL.addEventListener("click", () => console.log("Left clicked!"));

	arrowR.addEventListener("click", () => console.log("Right clicked!"));


})
