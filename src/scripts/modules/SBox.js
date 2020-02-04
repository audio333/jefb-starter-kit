import $ from 'jquery';
// slick-lightbox not working, jquery issue
class SBox {
	constructor() {
		this.els = $(".description");
		this.initSBox();
	}

	initSBox() {
		this.els.slickLightbox({
			itemSelector: 'a',
		  	navigateByKeyboard: true
		});
	}
}

export default SBox;