// ticker

$(document).ready(function() {
	$('.ticker').typer(['full-stack', 'back-end', 'rails']);
});

// #spinning

$( "#logo-container" )
.mouseenter(function() {
	$( this ).find( ":first-child" ).addClass('spin');
})
.mouseleave(function() {
	$( this ).find( ":first-child" ).removeClass( "spin" );
});

// webslides

$('#nav-mobile li, ul.right.hide-on-med-and-down li, #a-about').click(function(e){
	var currentContainer = '#' + $('.current').attr('id');
	var clickedContainer = $(this).children(":first").attr('href');
	if(typeof clickedContainer === 'undefined') {
		clickedContainer = $(this).attr('href');
	}
	if (currentContainer != clickedContainer) {
		$('div.container.current').fadeOut(500, function(){
			$(clickedContainer).fadeIn(500)});
		$('.current').removeClass('current');
		$(clickedContainer).addClass('current');
	}
	e.preventDefault();
});

// #change color of website

var counter = 0;
$( "#logo-container" ).click(function() {
	var bgColors = ['rgb(0, 0, 255)','rgb(255, 0, 0)','rgb(0, 128, 0)'];
	var currentColor = $('body').css('background-color');
	var index = $.inArray(currentColor, bgColors);
	if (index > -1) {
		bgColors.splice(index, 1);
	}
	var newColor = bgColors[Math.floor(Math.random() * (bgColors.length))];
	$( "body, .side-nav" ).animate({
		backgroundColor: newColor,
		color: "#fff"
	}, 200 );
	$( "nav .brand-logo, nav ul a, nav i, a" ).animate({
		color: "#fff"
	}, 200 );
	$( ".card-panel img" ).animate({
		borderColor: "5px solid #ffffff"
	}, 200 );
	$( ".divider" ).animate({
		backgroundColor: "#ffffff"
	}, 200 );
	counter += 1;
	$("#logo-container :last-child").text(" " + counter);	
});

// toggle resume sections

$("#resume div i" ).click(function() {
	var parent = $(this).closest('div[id]');
	$(parent).find( ".row:not(:first-child)" ).toggle(200);
	if($(this).hasClass('invert')) {
		$(this).fadeOut(200, function(){
			$(this).removeClass('invert');
		});
		$(this).fadeIn(200);
	}
	else {
		$(this).fadeOut(200, function(){
			$(this).addClass('invert');
		});
		$(this).fadeIn(200);
	}
});


