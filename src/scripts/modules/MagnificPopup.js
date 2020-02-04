import $ from 'jquery';

class MagnificPopup {
	constructor() {
		this.els = $(".description");
		this.initPopup();
	}

	initPopup() {
		this.els.magnificPopup({
			delegate: 'a',
			type:'image',
			gallery: {
				enabled: true
			}
		});
	}
}

export default MagnificPopup;
