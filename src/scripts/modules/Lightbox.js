import $ from 'jquery';

class Lightbox {
	constructor() {
		// this.els = $(".hero-slider");
		this.initLightbox();
	}

	initLightbox() {
		console.log('weeeeeeeeee');
		lightbox.option({
			'resizeDuration': 200,
	      'wrapAround': true
			// albumLabel: 'Imagers %1 of %2',
			// alwaysShowNavOnTouchDevices: false,
			// fadeDuration: 600,
			// fitImagesInViewport: true,
			// imageFadeDuration: 600,
			// maxWidth: 800,
			// maxHeight: 600,
			// positionFromTop: 50,
			// resizeDuration: 700,
			// showImageNumberLabel: true,
			// wrapAround: false,
			// sanitizeTitle: false
		});
	}
}

export default Lightbox;
