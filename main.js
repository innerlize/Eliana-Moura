$(document).ready(function() {

	// Makes "a" and "img" tags undraggable.
	$('a, img').attr('draggable', 'false');

	// ----------------------------------------------------------------------

	// Just a little animation for the hamburguer icon in the nav.
	$(".hamburger").click(function() {
		$(".stick1").toggleClass("selected")
		$(".stick2").toggleClass("selected2")
		$(".stick3").toggleClass("selected3")
		$(".nav_list_link").toggleClass("selected4")
	})

	// ----------------------------------------------------------------------

	// This code is just for the animation in the boxes from "Service" section. It's from AOS library.
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
		  

		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});

	// ----------------------------------------------------------------------

	// And this code is for the images in the "Gallery" section. This makes the images to display fullscreen.
	$('.row .column img').click(function() {
		$('.fullpage').fadeIn(200);
		$('.fullpageImg').attr("src", `${this.src}`)
	});

	$('.fullpage').click(function() {
		$('.fullpage').fadeOut(200);
	})

	// ----------------------------------------------------------------------

	// This is important, because this makes the link tags ("a") don't change the URL when clicked.
	$("a").not(".contact_box_action, .footer_social_link").on("click", function(e) {
		e.preventDefault();
		$(window).scrollTop($($(this).attr('href')).offset().top);
	});

	// ----------------------------------------------------------------------

	// Auto-update the copyright year.
	const year = new Date();

	document.getElementById("year").innerHTML = year.getFullYear();

})