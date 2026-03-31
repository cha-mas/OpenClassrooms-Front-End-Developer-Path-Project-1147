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
	const bannerImgElement = document.querySelector("img.banner-img");
	const bannerTagLineElement = document.querySelector("#banner p");

	const [arrowL, arrowR] = document.querySelectorAll("#banner img.arrow");

	const dotsContainerElement = document.querySelector("#banner .dots");

	const dotElements = slides.map(BUILD_DOTS_MAP_HELPER_FUNCTION)

	dotElements.forEach(dot => dotsContainerElement.appendChild(dot))

	function slide(direction) {
		let newIndex = currentSlideShowIndex + direction;

		if (newIndex < 0) newIndex = slides.length - 1
		else if (newIndex > slides.length - 1) newIndex = 0

		dotElements[currentSlideShowIndex].classList.remove("dot_selected")
		dotElements[newIndex].classList.add("dot_selected");

		currentSlideShowIndex = newIndex;

		bannerImgElement.setAttribute("src", `./assets/images/slideshow/${slides[currentSlideShowIndex].image}`);
		bannerTagLineElement.innerHTML = slides[currentSlideShowIndex].tagLine
	}

	const SLIDE_LEFT = () => slide(-1);
	const SLIDE_RIGHT = () => slide(1);

	arrowL.addEventListener("click", SLIDE_LEFT);
	arrowR.addEventListener("click", SLIDE_RIGHT);
})

function BUILD_DOTS_MAP_HELPER_FUNCTION(_slide, index) {
	const el = document.createElement("span")
	el.classList.add("dot")

	if (index == currentSlideShowIndex) {
		el.classList.add("dot_selected")
	}

	return el;
}