$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  adaptiveWidht:true,

  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  window.prev = document.querySelector("#carousel > button.slick-prev.slick-arrow");
  window.next = document.querySelector("#carousel > button.slick-next.slick-arrow");

  prev.style.display = 'none';
  next.style.display = 'none';

  document.querySelector('#prev-btn').onclick = () => prev.click();
  document.querySelector('#next-btn').onclick = () => next.click();
});
