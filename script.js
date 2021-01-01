let totalSliders = document.querySelectorAll('.slider--item').length;

let currentSlide = 0;

let slider = document.querySelector('.slider');
let sliderControls = document.querySelector('.slider--controls');

let sliderWidth = document.querySelector('.slider--width');

sliderWidth.style.width = `calc(100vw * ${totalSliders})`;

sliderControls.style.height = `${slider.clientHeight}px`;


// botao de voltar
function goPrev() {
  currentSlide--;

  if(currentSlide < 0) {
    currentSlide = totalSliders - 1;
  }

  updateMargin();
}

// botao de proximo
function goNext() {
  currentSlide++;

  if(currentSlide > (totalSliders - 1)) {
    currentSlide = 0;
  }

  updateMargin();
}

// atualiza o margin realizando a mudança na imagem
function updateMargin() {
  let sliderWidthItem = document.querySelector('.slider--item').clientWidth;
  let newMargin = (currentSlide * sliderWidthItem);
  
  sliderWidth.style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);