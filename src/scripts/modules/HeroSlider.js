import $ from 'jquery';

class HeroSlider {
  constructor() {
    this.els = $(".description");
    this.initSlider();
  }

  initSlider() {
    this.els.slick({
      autoplay: true,
      arrows: true,
      dots: true,
      infinite        : true,
      slidesToShow    : 3,
      slidesToScroll  : 1,
      mobileFirst     : true
    });
  }
}

export default HeroSlider;
