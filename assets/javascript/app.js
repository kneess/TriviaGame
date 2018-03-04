correct = 0;
incorrect = 0;
unanswered = 0;
//code runs when page is loaded
window.onload = function() {
	$("#timer").on("click", timer.start);
}
//variable holds setInterval
	var intervalId;
	var clockRunning = false;
	//var inputValue = ($('input[name=bb]:checked', '#myForm').val());
	//inputValue = parseInt(inputValue);
//timer
	var timer = {
		time: 5,
	start: function() {
		if(!clockRunning)
		intervalId = setInterval(timer.count, 1000)
		clockRunning = true;
	},
	

	count: function() {
		timer.time--;
		$("#timer").text(timer.time);
		console.log(timer.time);
		if (timer.time === 0) {
			var inputValue = ($('input[name=bb]:checked', '#firstForm').val());
			inputValue = parseInt(inputValue);
			if (inputValue === 1) {
				console.log(inputValue);
			correct++
			$("#score").text(correct);
			//console.log($("#score"));
} else if (inputValue === 0) {
	incorrect--;
	console.log(incorrect);
}
			//need to display scores here
			clearInterval(intervalId);
			clockRunning = false;
		}
	},

}

//$("#arnold").click(function() {
//	var inputDetect = $(this).val();
//	inputDetect = parseInt(inputDetect);
//	console.log(inputDetect);
//})

//$('#myForm input').on('change', function() {
//   var inputValue = ($('input[name=bb]:checked', '#myForm').val()); 
//});