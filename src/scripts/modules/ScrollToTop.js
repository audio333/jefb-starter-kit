class ScrollToTop {
	constructor() {
		this.toTop = document.querySelector(".to-top");
		this.events();
	}

	events() {
		console.log('scroll init');
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 100) {
				this.toTop.classList.add("active");
			} else {
				this.toTop.classList.remove("active");
			}
		})
	}
}

export default ScrollToTop;
