$(document).ready(function(){
	var counterStarted = false;

	// numbers to show
	var $days 	 = 0;
	var $hours 	 = 0;
	var $minutes = 0;
	var $seconds = 0;

	var timer = setInterval(updateCounter, 1000);

	function updateCounter() {
		// get new dates
		var nowTime 	   = new Date();
		var nextSession    = getNextSession();
		var timeDifference = (nextSession - nowTime) / 1000;

		// calculate numbers to show
		$days 	 = Math.floor(timeDifference / (3600 * 24));
		$hours 	 = parseInt(timeDifference / 3600) % 24;
		$minutes = parseInt(timeDifference / 60) % 60;
		$seconds = timeDifference % 60;

		// update HTML
		$("#days .number").text($days);
		$("#hours .number").text($hours);
		$("#minutes .number").text($minutes);
		$("#seconds .number").text($seconds);

		// show the counter
		if (!counterStarted) {
			$("#countdown").animate({opacity:1}, 1000);
			counterStarted = true;
		}
	}

	function getNextSession() {
	    var sesDate = new Date();
	    sesDate.setDate(sesDate.getDate() + (3 - 1 - sesDate.getDay() + 7) % 7 + 1);
	    sesDate.setHours(12);
	    sesDate.setMinutes(0);
	    sesDate.setSeconds(0);
	    return sesDate;
	}
});
