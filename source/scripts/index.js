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
