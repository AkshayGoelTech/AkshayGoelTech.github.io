/*
Copyright: Akshay Goel
 */

 loadTopNavBar();

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

function topBarData() {
	return '<ul class="navList">'+
	'<li><a href="../index.html" id="to_home">Home</a></li>'+
	'<li><a href="../index.html#introduction_tag" id="to_intro">Introduction</a></li>'+
	'<li><a href="../index.html#projects_tag" id="to_projects">Projects</a></li>'+
	'<li><a href="../index.html#contactme_tag" id="to_contact">Contact Me</a></li>'+
	'<li><a href="../documents/AkshayGoel_Resume.pdf" target="_blank">Resume</a></li>'+
'</ul>';
}

function loadTopNavBar() {
 	var path = window.location.pathname;
 	var page = path.split("/").pop();
 	debugger;
 	if (page != 'index.html' && page != '') {
 		$('#nav').append(topBarData());
 	}
}

/*
Document Functions
 */
 $(document).ready(function() {
 	initPage();
 })
 
 window.onload = function() {

 	//Loading Screen
 	var body = document.getElementById('body');
 	body.className +=' loaded';

 	$('.loaded #logo h1').addClass('animated fadeInDown');
 	$('.loaded #logo p').addClass('animated fadeInUpBig');
 	$('#nav').addClass('animated fadeInDown'); 
 };

 function initPage() {
 	$('#projects img').height($('#projects img').width()/2);
 	 	$('#header #nav').height($('#nav ul').height() + 5);

 	 	if (screen.width > 737) {
 	 		$('#header-wrapper').height(0.9 * window.innerHeight);
 	 	} 
 	 	else if (screen.width <= 737) {
 	 		$('#header-wrapper').height(0.5 * window.innerHeight);
 	 		$('#projects_page #content').prepend($('#sidebar .box .style1'));
 	 	}
 	 	else {
 	 		$('#header-wrapper').height(0.5 * window.innerHeight);
 	 	}
 }

//Scroll Animation
var $root = $('html, body');
	$('a[href*=#]').click(function(e) {
		$root.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			$root.stop();
			});

		var time = event.target.id == "to_intro"? 800:1200;			
		var href = $.attr(this, 'href');
		e.preventDefault();
			 $root.animate({
				 scrollTop: $(href).offset().top
			   }, time, function () {
		   });
		return false;
	});

 /*
 	Google Analytics
 */
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-79770649-1', 'auto');
    ga('send', 'pageview');