var time = 30;

function start() {
	intervalId = setInterval(count, 1000);
}
 
function count () {
	time--
	$("#timer").text(time);
}
start()


