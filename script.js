$(document).ready(function() {
	$( "#button_1" ).click(function() {
		var thanks = Array("Gee, Thanks Guys!", "Golly", "No more ramen for TimTim", "Timmy is a free HN" "This will buy enough Mountian Dew and Doritos to last weeks!", "Any more of this, and I'll be voting Republican!", "Suck it Scoot");
		var thanks = thanks[Math.floor(Math.random()*thanks.length)];
  		alert( thanks );
	})
});
