//this code is a disaster
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
		//stop timer
		if (timer.time === 0) {
			clearInterval(intervalId);
			clockRunning = false;
			//if value ===1 supposed to add to the correct score
			//this isnt working 
		if (inputValue === 1){
		var inputValue = $('input[name=bb]:checked', '.firstForm'.val());
		inputValue = parseInt(inputValue);
	console.log(inputValue);
		correct++
		$("#score").text(correct);
		console.log($("#score"));
		//else if value is zero supposed to add to incorrect score
} else if (inputValue === 0) {
	incorrect++;
	$("#score2").text(incorrect);
	console.log(incorrect);}}
		},
	}
	//here I got the on click function to log the the values of the answers
$(document).ready(function() {
  $("#done").click(function() {
    var answersList = [];
    //Loop over all questoins
    $(".firstForm").each(function() {
      var answer = $("input[name='bb']:checked", $(this)).val();
      console.log(answer);    //if Answer isnt provided do not update the answersList
      if (answer !== undefined) {
        answersList.push({
          answer: answer
        });
      }
    });
    $("#score").text(answersList);
    console.log(answersList);
  });
});//
// 
//New psuedo code
//I wanted to then add up all the indexes with a value of one and add them to the correct answer score
//then I wanted to add up all the indexes with a value of zero and add them to the incorrect answer score
var correct = 0;
var incorrect = 0;
var unanswered = 0;
//function to get values from buttons checked
$('input:radio').change(function() {
	var array =[];
	$('input:radio:checked').each(function() {
		array.push($(this).val());
		console.log(array)
	})
})
//if values equal 1 add number of values together
//correct answers values added together
//else values equal 0 add number of together
//incorrect answers added together
//button to submit answers
//onclick button to start game
//timer starts
//if submit button clicked submit answers
//else if timer = 0 submit all answers