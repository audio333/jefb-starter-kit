class ScrollReveal {
	constructor() {
		this.faders = document.querySelectorAll('.fade-in');
		this.sliders = document.querySelectorAll('.slide-down');
		this.scales = document.querySelectorAll('.scale-up');

		// Intersection Observer
		this.appearOptions = {
			rootMargin: "0px 0px -100px 0px"
		};

		this.appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
					// entry.target.style.animation = `anim1 ${entry.target.dataset.delay} forwards ease-out`;
				} else {
					// entry.target.style.animation = 'none';
					entry.target.classList.add('appear');
					appearOnScroll.unobserve(entry.target);
				}
			})
		}, this.appearOptions);

		this.events();
	}

	events() {
		this.faders.forEach(fader => {
			this.appearOnScroll.observe(fader);
		});
		this.sliders.forEach(slider => {
			this.appearOnScroll.observe(slider);
		});
		this.scales.forEach(scale => {
			this.appearOnScroll.observe(scale);
		});
	}
}

export default ScrollReveal;
