var $carousel = $('.slider');
var settings = {
  dots: false,
  arrows: false,
  slide: '.slick-slideshow__slide',
  slidesToShow: 2,
  centerMode: true,
  centerPadding: '60px',
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');

  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function () {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);

}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function () {
  setSlideVisibility();
});
function BestSellerSlider() {
  var $bestSellerSlider = $('.slider_best_seller');
  if ($bestSellerSlider.length) {
    $('.slider_best_seller').slick({
      dots: false,
      arrows: false,
      slide: '.slick-slideshow__slide_best',
      slidesToShow: 2,
      centerMode: true,
      centerPadding: '60px',
    });
  }
}
function BestSellerSliders() {
  var $bestSellerSlider = $('.slider_best_sellers');
  if ($bestSellerSlider.length) {
    $('.slider_best_sellers').slick({
      dots: false,
      arrows: false,
      slide: '.slick-slideshow__slide_bests',
      slidesToShow: 2,
      centerMode: true,
      centerPadding: '60px',
    });
  }
}
function NewestSellerSlider() {
  var $newestSellerSlider = $('.slider_newest_seller');
  if ($newestSellerSlider.length) {
    $('.slider_newest_seller').slick({
      dots: false,
      arrows: false,
      slide: '.slick-slideshow__slide_newest',
      slidesToShow: 2,
      centerMode: true,
      centerPadding: '60px',
    });
  }
}
function CommingSoonSlider() {
  var $commingSoonSlider = $('.slider_comming_soon');
  if ($commingSoonSlider.length) {
    $('.slider_comming_soon').slick({
      dots: false,
      arrows: false,
      slide: '.slick-slideshow__slide_comming_soon',
      slidesToShow: 2,
      centerMode: true,
      centerPadding: '60px',
    });
  }
}