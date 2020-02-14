class Menu {
	constructor() {
		console.log('menu init');
		// Media Queries
		this.tabletvp = window.matchMedia("(min-width: 770px)");
		// this.desktopvp = window.matchMedia("(min-width: 1000px)");
		// Sidebar
		this.sidebar = document.querySelector('.sidebar');
		this.sidebarOpen = document.querySelector('.sidebar__open');
		this.sidebarClose = document.querySelector('.sidebar__close');
		// Mobile Nav
		this.mobileNav = document.querySelector('.mobile-nav');
		this.mobileNavOpen = document.querySelector('.mobile-nav__open');
		this.mobileNavClose = document.querySelector('.mobile-nav__close');
		// Background Overlay
		this.bgOverlay = document.querySelector('.bg-overlay');

		// Intersection Observer
		this.sectionOne = document.querySelector('.hero');

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
		// Responsive Mobile Nav
		this.tabletvp.addEventListener('change', ({media, matches}) => {
			console.log(media, matches);
			if(this.mobileNav.style.width > "1px") {
				if (matches) {
					this.mobileNav.style.width = "380px";
				} else {
					this.mobileNav.style.width = "290px";
				}
			}
		});

		// Toggle Navbar
		this.sidebarOpen.addEventListener('click', this.openSidebar.bind(this));
		this.sidebarClose.addEventListener('click', this.closeSidebar.bind(this));
		this.mobileNavOpen.addEventListener('click', this.openMobileNav.bind(this));
		this.mobileNavClose.addEventListener('click', this.closeMobileNav.bind(this));
		// Background Overlay
		this.bgOverlay.addEventListener('click', this.closeSidebar.bind(this));
		this.bgOverlay.addEventListener('click', this.closeMobileNav.bind(this));

		this.sectionOneObserver.observe(this.sectionOne);
	}

	openSidebar(e) {
		e.preventDefault();
		this.sidebar.style.width = "450px";
		this.bgOverlay.style.display = "block";
	}

	closeSidebar() {
		this.sidebar.style.width = "0";
		this.bgOverlay.style.display = "none";
	}

	openMobileNav(e) {
		e.preventDefault();
		if (this.tabletvp.matches) {
			this.mobileNav.style.width = "380px";
		} else {
			this.mobileNav.style.width = "290px";
		}

		this.bgOverlay.style.display = "block";
	}

	closeMobileNav() {
		this.mobileNav.style.width = "0";
		this.bgOverlay.style.display = "none";
	}
}

export default Menu;
