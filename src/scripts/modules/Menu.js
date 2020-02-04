class Menu {
	constructor() {
		console.log('menu init');

		this.openBtn = document.querySelector('.cta');
		this.closeBtn = document.querySelector('.close');
		this.menu = document.querySelector('#mobile__menu');
		this.bgOverlay = document.querySelector('.bg-overlay');
		this.sectionOne = document.querySelector('.hero');

		// Intersection Observer
		this. sectionOneOptions = {
			rootMargin: "-630px 0px 0px 0px"
		};

		this.sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
			this.header = document.querySelector('header');
			entries.forEach(entry => {
				if(!entry.isIntersecting) {
					this.header.classList.add('nav-scrolled');
				} else {
					this.header.classList.remove('nav-scrolled');
				}
			})
		}, this.sectionOneOptions);

		this.events();
	}

	events() {
		this.openBtn.addEventListener('click', this.openNav.bind(this));
		this.closeBtn.addEventListener('click', this.closeNav.bind(this));
		this.bgOverlay.addEventListener('click', this.closeNav.bind(this));

		this.sectionOneObserver.observe(this.sectionOne);
	}

	openNav(e) {
		e.preventDefault();
		this.menu.style.width = "35vw";
		this.bgOverlay.style.display = "block";
	}

	closeNav() {
		this.menu.style.width = "0";
		this.bgOverlay.style.display = "none";
	}
}

export default Menu;
