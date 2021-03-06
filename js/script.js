$(document).ready(function() {

	// Global Variables
	var startHour = new Date().getHours();
	var noon = 12;
	var evening = 17;
	var partyTime = 21;
	var napTime = 15;
	var lunchTime = 12;
	var wakeupTime = 7;
	var message;
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
	var isPartyTime = false;

	// Clock
	var updateClock = function() {
		var showCurrentTime = function() {
			var currentTime = new Date();
			var hours = currentTime.getHours();
			var minutes = currentTime.getMinutes();
			var seconds = currentTime.getSeconds();
			var meridian = "AM";

			if(hours >= noon) {
				meridian = "PM";
			}
			if(hours > noon) {
				hours = (hours - 12);
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
			$('#clock').text(clockTime);

			var minSec = (minutes + ":" + seconds);
			
			var checkHr = function() {
				if (minSec == "00:00") {
					startHour = new Date().getHours();
					setImageMssg();
				}
			}
			checkHr();
		};
		showCurrentTime();
	};

	// Message and Images
	var setImageMssg = function () {
		if (startHour == partyTime) {
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
			message = "Let's party!";
		}
		else if (startHour == napTime) {
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
			message = "Time for a nap.";
		}
		else if (startHour == lunchTime) {
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
			message = "Time for lunch!";
		}
		else if (startHour == wakeupTime) {
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
			message = "Good morning! Time to get up.";
		}
		else if (startHour < noon) {
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
			message = "Good morning!";
		}
		else if (startHour > evening) {
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
			message = "Good evening!";
		}
		else {
			image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
			message = "Good afternoon!";
		}

		// Dynamically puts the message where the timeEvent ID lives and changes image
		$('#timeEvent').text(message);
		$('#lolcat').attr('src', image);

	};

	setImageMssg();

	// Time Selectors - allows the selectors to rewrite the different times (wakeup, lunch and nap)
	var wakeUpEvent = function() {
		wakeupTime = $('#wakeUpTimeSelector').val();
		setImageMssg();
	};

	var lunchEvent = function() {
		lunchTime = $('#lunchTimeSelector').val();
		setImageMssg();
	};

	var napEvent = function() {
		napTime = $('#napTimeSelector').val();
		setImageMssg();
	};

	// Party Time button
	var partyEvent = function () {
		//Check isPartyTime, then do the thing
		if (isPartyTime === false) {
			isPartyTime = true;
			startHour = partyTime;
			$('#partyTimeButton').css('backgroundColor', '#ff0');
			$('#partyTimeButton').css('color', '#000');
			setImageMssg();
		}
		else {
			isPartyTime = false;
			startHour = new Date().getHours();
			$('#partyTimeButton').css('backgroundColor', '#222');
			$('#partyTimeButton').css('color', '#fff');
			setImageMssg();
		}
	};

	// Populates clock ID with current time and increments it in one second intervals.
	updateClock();
	var oneSecond = 1000;
	setInterval(updateClock, oneSecond);

	// Activates button
	$('#partyTimeButton').click(partyEvent);
	// Keyboard navigation already allows for tabbing and using enter/space to trigger the button.
	
	// Time Selectors
	$('#wakeUpTimeSelector').change(wakeUpEvent);
	$('#lunchTimeSelector').change(lunchEvent);
	$('#napTimeSelector').change(napEvent);

})
