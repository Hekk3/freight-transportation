const track1 = document.querySelector('.track');
const headerPrev = document.querySelector('.slider__prev');
const headerNext = document.querySelector('.slider__next');
const item1 = document.querySelectorAll('.track__item');

let position1 = 0;
let width1 = item1[0].clientWidth;

if (position1 === 0) {
	headerPrev.style.pointerEvents = "none";
}


const moveTrack1 = function() {
	track1.style.transform = "translateX(" + position1 + "px)"; // When we click on the button, we move the "track" using translateX + position.
}



let checkBtn = function() { // check buttons - check when the button need stops
	item1[0].classList.add('itemAnim');
	position1 === 0 ? headerPrev.style.pointerEvents = "none" : headerPrev.style.pointerEvents = "auto" ;
	position1 <= -width1 * 2 + 11 * 2 ? headerNext.style.pointerEvents = "none" : headerNext.style.pointerEvents = "auto" ;
}

headerPrev.addEventListener('click', () => {
	position1 += width1 + 11; // take width the item;

	moveTrack1();
	checkBtn();
});

headerNext.addEventListener('click', () => {
	position1 -= width1 + 11; // take width the item;

	moveTrack1();
	checkBtn();
});