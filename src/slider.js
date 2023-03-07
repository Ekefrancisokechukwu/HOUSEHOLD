
const nextBtn = document.querySelector('.slide__btn-right');
const prevBtn = document.querySelector('.slide__btn-left');
const slideContent = document.querySelector('.slide__gallery');
const slideItem = document.querySelector('.slide__prod');

let count = slideItem.offsetWidth

let r = slideContent.length
// console.log(slideItem)

let counter = 0;
nextBtn.addEventListener("click",() => {
 let w = slideItem.offsetWidth;
  slideContent.scrollLeft += w;
})

prevBtn.addEventListener("click",() => {
 let w = slideItem.offsetWidth;
  slideContent.scrollLeft -= w;

})

function carousel() {
  // working with slides

  if(count === slideContent.length) {
    slideContent.scrollLeft = 0;
  }

  if(counter < 0) {
    counter = slideContent.length - 1;
  }
 
}