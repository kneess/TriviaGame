//code runs when page is loaded
window.onload = function() {
	$("#timer").on("click", timer.start);
}
//variable holds setInterval
	var intervalId;
//timer
	var timer = {
		time: 5,
	start: function() {
	var	intervalId = setInterval(timer.count, 1000)

	},
	

	count: function() {
		timer.time--;
		$("#timer").text(timer.time);
		console.log(timer.time);
		if (timer.time === 0) {
			//need to display scores here
			cleatInterval(intervalId);
		}
	},

}

$("#arnold").click(function() {
	var inputDetect = $(this).val();
	inputDetect = parseInt(inputDetect);
	console.log(inputDetect);
})