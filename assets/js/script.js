$(document).ready(function()  {

	for (let i = 0; i < 6; i++) {
		$("#fruit").append("<div class='fruit'><img src='assets/img/fruit.jpeg'></div>")
}
	for (let water = 0; water < 12; water+) {
		$("water").append("<div class='water'><img src='assets/img/water.jpeg'></div>")
}
	for (let bread = 0; bread < 8; bread+) {
		$("bread").append("<div class='bread'><img src='assets/img/bread.jpeg'></div>")
    // Things to do at each iteration
}

	$(".nav-item").click(function() {

		let buttonName = $(this).text();
		let buttonActive = $(this).hasClass("active");

		// UNCOMMENT THE SECTION BELOW FOR PART 2

		/*

		// YOUR CODE HERE - PART 2.1

		if (condition) {
			$(this).addClass("active");
			$(this).removeClass("inactive");

			// YOUR CODE HERE - PART 2.2

		} else {
			$(this).addClass("inactive");
			$(this).removeClass("active");

			// YOUR CODE HERE - PART 2.2

		}
		*/

	})
})
