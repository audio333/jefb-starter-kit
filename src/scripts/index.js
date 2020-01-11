// 3rd party packages from NPM
// Some useful npm packages: https://getflywheel.com/layout/best-javascript-libraries-frameworks-2020/#libraries
import $ from 'jquery';
import slick from 'slick-carousel';

// CSS
import '../styles/main.scss';

// Our modules / classes
import MobileMenu from './modules/MobileMenu';
import HeroSlider from './modules/HeroSlider';

// Instantiate a new object using our modules/classes
var mobileMenu = new MobileMenu();
var heroSlider = new HeroSlider();