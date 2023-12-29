const sliderToggle = document.querySelector('.slider__toggle');
const slider = document.querySelector('.slider');

if (slider) {
  let flag = false;
  sliderToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (flag) {
      slider.classList.toggle('slider--after');
      slider.classList.toggle('slider--before');
    } else {
      flag = true;
      slider.classList.add('slider--after');
    }
  });
}


const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
