// 3rd party packages from NPM
// Some useful npm packages: https://getflywheel.com/layout/best-javascript-libraries-frameworks-2020/#libraries
import $ from 'jquery';
// import slick from 'slick-carousel';
// import lightbox from 'lightbox2';
import popup from 'magnific-popup';

// CSS
import '../styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'lightbox2/src/css/lightbox.css';
import 'magnific-popup/src/css/main.scss';

// Our modules / classes
import Menu from './modules/Menu';
import ScrollToTop from './modules/ScrollToTop';
import ScrollReveal from './modules/ScrollReveal';
// import MobileMenu from './modules/MobileMenu';
// import HeroSlider from './modules/HeroSlider';
// import Lightbox from './modules/Lightbox';
import MagnificPopup from './modules/MagnificPopup';

// Instantiate a new object using our modules/classes
var menu = new Menu();
var scrollToTop = new ScrollToTop();
var scrollReveal = new ScrollReveal();
// var mobileMenu = new MobileMenu();
// var heroSlider = new HeroSlider();
// var lightbox2 = new Lightbox();
var magnificPopup = new MagnificPopup();