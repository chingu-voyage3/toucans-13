/*
Team Toucan-13 part of the chingu-voyage-3
Team Members: Aaron Onojaife, laurailona, Vadim Klimets, Jordan Gill
*/

/* Slack Buttons */

/*Slack Buttons END */

/* Initial Fade-In effect */

/* Initial Fade-In effect END */


/* On-Scroll Fade-In effect */

let fadeinOnScroll = function() {
  let firstCard = document.getElementById("first-card");
  let secondCard = document.getElementById("second-card");
  let thirdCard = document.getElementById("third-card");

  let startOfSection = document.getElementById("how-it-works-header");
  let bounding = startOfSection.getBoundingClientRect(); //checks position of element
  if( //checks if element is visible on screen
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
   bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    function fadeinFirstCard() {
      firstCard.classList.add("fadein");
    };
    function fadeinSecondCard() {
      secondCard.classList.add("fadein");
    };
    function fadeinThirdCard() {
      thirdCard.classList.add("fadein");
    };
    setTimeout(fadeinFirstCard, 500);
    setTimeout(fadeinSecondCard, 1500);
    setTimeout(fadeinThirdCard, 2500);
  };
};
window.addEventListener("scroll", fadeinOnScroll);
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
