$("document").ready(function () {
	$(".questions").hide();
	$("#score").hide();
	$("#score2").hide();
	$("#submit").hide();
	$("#unanswered").hide();
	$("navbar").hide();

	$("#startButton").on("click", function () {
		$("#startButton").hide();
		$(".questions").show();
		$("#submit").show();
		$(".jumbotron").hide();
		$("navbar").show();
		$("h3").hide();

		displayQuestions();

	})



	function displayQuestions() {
		var timer = 30;
		intervalId = setInterval(decrement, 1000);
		// $(this).val()
		function decrement() {
			timer--;
			$("#timer").html(timer);

			if (timer === 0) {
				getVals();
			}
			$("#submit").click(function () {
				getVals();
			})

		}
	}


	function getVals() {
		var correct = 0;
		var incorrect = 0;
		var unanswered = 0;
		$("#submit").hide();
		$.each($("input[name='q1']:checked"), function () {
			if ($(this).val() === "1") {
				correct++;
			}
			else {
				incorrect++;
			}
		});

			if(!$("input[name='q1']:checked").val()) {
			unanswered++;
			};
		

		$.each($("input[name='q2']:checked"), function () {
			if ($(this).val() === "1") {
				correct++;
			}
			else {
				incorrect++;
			}
		});

		if(!$("input[name='q2']:checked").val()) {
			unanswered++;
			};

		$.each($("input[name='q3']:checked"), function () {
			if ($(this).val() === "1") {
				correct++;
			}
			else {
				incorrect++;
			}
		});

		if(!$("input[name='q3']:checked").val()) {
			unanswered++;
			};

		$.each($("input[name='q4']:checked"), function () {
			if ($(this).val() === "1") {
				correct++;
			}
			else {
				incorrect++;
			}
		});

		if(!$("input[name='q4']:checked").val()) {
			unanswered++;
			};

		$.each($("input[name='q5']:checked"), function () {
			if ($(this).val() === "1") {
				correct++;
			}
			else {
				incorrect++;
			}
		});

		if(!$("input[name='q5']:checked").val()) {
			unanswered++;
			};

		$.each($("input[name='q6']:checked"), function () {
			if ($(this).val() === "1") {
				correct++;
			}
			else {
				incorrect++;
			}
		});

		if(!$("input[name='q6']:checked").val()) {
			unanswered++;
			};

		$.each($("input[name='q7']:checked"), function () {
			if ($(this).val() === "1") {
				correct++;
			}
			else {
				incorrect++;
			}
		});

		if(!$("input[name='q7']:checked").val()) {
			unanswered++;
			};

		$("#score").text("Correct: " + correct);
		$("#score2").text("Incorrect: " + incorrect);
		$("#unanswered").text("Unanswered: " + unanswered);
		noTime();

	}



	function noTime() {
		clearInterval(intervalId);
		$(".questions").hide();
		$("#score").show();
		$("#score2").show();
		$("#unanswered").show();

	}
});