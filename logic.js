$(document).ready(function() {

	$('a, img').attr('draggable', 'false');

	$(".hamburger").click(function() {
		$(".stick1").toggleClass("selected")
		$(".stick2").toggleClass("selected2")
		$(".stick3").toggleClass("selected3")
		$(".nav_list_link").toggleClass("selected4")
	})

	$('.contact_box_action').hover(function() {
		$(this).siblings('.cicon').toggleClass('onHover')
	})

	const year = new Date();

	document.getElementById("year").innerHTML = year.getFullYear();

})