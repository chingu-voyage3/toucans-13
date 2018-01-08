/*
Team Toucan-13 part of the chingu-voyage-3
Team Members: Aaron Onojaife, laurailona, Vadim Klimets, Jordan Gill
*/

/* Slack Buttons */

/*Slack Buttons END */

/* Initial Fade-In effect */

/* Initial Fade-In effect END */


/* On-Scroll Fade-In effect */

/* On-Scroll Fade-In effect END*/


/* To-the-top button */
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.to-the-top').fadeIn();
		} else {
			$('.to-the-top').fadeOut();
		}
	});
	$('.to-the-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});

/* To-the-top button END */
