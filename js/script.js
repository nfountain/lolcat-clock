// Test link is working correctly
console.log("Hello World");

// Variables
var currentTime = new Date().getHours();
var noon = 12;
var evening = 17;
var partyTime = 21;
var napTime = 14;
var lunchTime = 12;
var wakeupTime = 7;
var message;
var messageOfHour = document.getElementById("timeEvent");
var lolcatImage = document.getElementById("lolcat");

// ADDED var image - HAVE SAVED, BUT HAVE NOT COMMITTED, as I still need to get the new images to render properly - I think I broke my if-then-else statements, below.

// Message
if (currentTime == partyTime) {
    lolcatImage.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	var message = "Let's party!";
}
else if (currentTime == napTime) {
    lolcatImage.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	var message = "Time for a nap.";
}
else if (currentTime == lunchTime) {
    lolcatImage.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	var message = "Time for lunch!";
}
else if (currentTime == wakeupTime) {
    lolcatImage.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	var message = "Good morning! Time to get up.";
}
else if (currentTime < noon) {
	var message = "Good morning!";
}
else if (currentTime > evening) {
	var message = "Good evening!";
}
else {
	var message = "Good afternoon!";
}

// Dynamically puts the message where the timeEvent ID lives
messageOfHour.innerText = message;