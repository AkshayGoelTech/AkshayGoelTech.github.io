/*
	Escape Velocity by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center',
				detach: false
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);

/*
Document Functions
 */
 $(document).ready(function() {
 	
 })
//Scroll Animation
var $root = $('html, body');
	$('a[href*=#]').click(function() {
		$root.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			$root.stop();
			});

		var time = 1600;
		if (event.target.id == "to_intro") {
			time = 1300;
		}
			
		var href = $.attr(this, 'href');
			 $root.animate({
				 scrollTop: $(href).offset().top
			   }, time, function () {
		     window.location.hash = href;
		   });
		return false;
	});

//Loading Screen
window.onload = function() {
	var body = document.getElementById('body');
	body.className +=' loaded';
};

/*
	Function to Send the Form to my firebase
 */

function sendForm() {
	var name = $('#contact-name').val();
	var email = $('#contact-email').val();
	var message = $('#contact-message').val();
	var dateTime = new Date();
	var ref = new Firebase('https://akshays-website.firebaseio.com/contact');
	ref.push({'Name': name, 'Email': email, 'Message': message, 'Date-Time': dateTime.toString()});
	console.log(ref.toString());
}




 /*
 Google Analytics
  */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-79770649-1', 'auto');
    ga('send', 'pageview');