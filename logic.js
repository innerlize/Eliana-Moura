$(document).ready(function() {

	$(".hamburger").click(function() {
		$(".stick1").toggleClass("selected")
		$(".stick2").toggleClass("selected2")
		$(".stick3").toggleClass("selected3")
		$(".nav_list_link").toggleClass("selected4")
	})

	const year = new Date()

	document.getElementById("year").innerHTML = year.getFullYear()

})