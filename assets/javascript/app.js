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
	//var inputValue = ($('input[name=bb]:checked', '#firstForm').val());
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
			clearInterval(intervalId);
			clockRunning = false;
		if (inputValue === 1){
		var inputValue = ($('input[name=aa]:checked', '#secondForm').val());
		inputValue = parseInt(inputValue);
	console.log(inputValue);
		correct++
		$("#score").text(correct);
		console.log($("#score"));
} else if (inputValue === 0) {
	incorrect++;
	console.log(incorrect);

}}
		},
	}
	
$(document).ready(function() {
  $("#done").click(function() {
    var answersList = [];
    //Loop over all questoins
    $(".firstForm").each(function() {

      var questionId = $(this).attr("value");
      var answer = $("input[name='bb']:checked", $(this)).val();

      //if Answer isnt provided do not update the answersList
      if (answer !== undefined) {
        answersList.push({
          answer: answer
        });
      }
    });
    console.log(answersList);
  });
});
