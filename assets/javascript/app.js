//correct = 0;
//incorrect = 0;
//unanswered = 0;
////code runs when page is loaded
//window.onload = function() {
//	$("#timer").on("click", timer.start);
//}
////variable holds setInterval
//	var intervalId;
//	var clockRunning = false;
//	//var inputValue = ($('input[name=bb]:checked', '#firstForm').val());
//	//inputValue = parseInt(inputValue);
////timer
//	var timer = {
//		time: 5,
//	start: function() {
//		if(!clockRunning)
//		intervalId = setInterval(timer.count, 1000)
//		clockRunning = true;
//	},
//		count: function() {
//		timer.time--;
//		$("#timer").text(timer.time);
//		console.log(timer.time);
//		if (timer.time === 0) {
//			clearInterval(intervalId);
//			clockRunning = false;
//		if (inputValue === 1){
//		var inputValue = $('input[name=bb]:checked', '.firstForm'.val());
//		inputValue = parseInt(inputValue);
//	console.log(inputValue);
//		correct++
//		$("#score").text(correct);
//		console.log($("#score"));
//} else if (inputValue === 0) {
//	incorrect++;
//	$("#score2").text(incorrect);
//	console.log(incorrect);//

//}}
//		},
//	}
//	
//$(document).ready(function() {
//  $("#done").click(function() {
//    var answersList = [];
//    //Loop over all questoins
//    $(".firstForm").each(function() {
//      var answer = $("input[name='bb']:checked", $(this)).val();
//      console.log(answer);//

//      //if Answer isnt provided do not update the answersList
//      if (answer !== undefined) {
//        answersList.push({
//          answer: answer
//        });
//      }
//    });
//    console.log(answersList);
//  });
//});

//pseudo code
var correct = 0;
var incorrect = 0;
var unanswered = 0;
//questions to load on to screen
//and answers to load on to screen 
//radio buttons to load
//function to get values from buttons checked
$('input:radio').change(function() {
	array =[];
	$('input:radio:checked').each(function() {
		array.push($(this).val());
		console.log(array)
	})
})
//if values equal 1 add them together
//correct answers values added together
//else values equal 0 add them together
//incorrect answers added together
//button to submit answers
//onclick button to start game
//timer starts
//if submit button clicked submit answers
//else if timer = 0 submit all answers