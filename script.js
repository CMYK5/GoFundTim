$(document).ready(function() {
	$( "#button_1" ).click(function() {
		var thanks = Array("Gee, Thanks Guys!", "Golly", "No more ramen for TimTim", "Timmy is a free HN");
		var thanks = thanks[Math.floor(Math.random()*thanks.length)];
  		alert( thanks );
	})
});
