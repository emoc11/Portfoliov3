var canvasOne;

$(document).ready(function() {

/**
 * @requires jquery.js
 * @requires delaunay.js
 * @requires canvasBuild.js
 */

	// Transition entre page + loading
	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 1500,
		outDuration: 800,
		linkElement: '.animsition-link',
		// e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
		loading: true,
		loadingParentElement: 'body', //animsition wrapper element
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="loading.svg" />'
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: [ 'animation-duration', '-webkit-animation-duration'],
		// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		overlay : false,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'body',
		transition: function(url){ window.location.href = url; }
	});



	// Animation arrivé/depart pages
	if($("body").is(".page-photo-project")) {
		$(".photos-img").each(function(index) {
		    $(this).delay(200*index).animate({opacity:1});
		});

		baguetteBox.run('.photos');
	}

	$("a.anim-off").bind("click", function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(".hp").addClass("anim-off");
		canvasOne.fadeOut();
		$this = $(this);
		setTimeout(function (){
			window.location = $this.attr("href");
		}, 2000);
	})

	// Canvas design génératif
	canvasOne = new canvasBuild();
	canvasOne.setAgentSizeRandom(1,15);
	canvasOne.setAgents("rond", 200, 5, .2, 1, true);
	canvasOne.setAgentFillTwoColors("rgb(191,129,72)", "rgb(110,83,55)");
	canvasOne.setAgentFill("gradient");
	canvasOne.setAgentGradientSize(5);
	canvasOne.startDelaunay(0, "rgb(191,129,72)");
	canvasOne.delaunayMaxDistance(.3, 50);
	canvasOne.startAnim();

});