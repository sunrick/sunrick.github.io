// ticker

$( document ).ready(function() {
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

$('#logo-container').click(function(){
	var currentContainer = $('.current').attr('id');
	var clickedContainer = 'home';
	if (currentContainer === clickedContainer) {
	} 
	else { 
		$('div.container.current').fadeOut(500, function(){
			$('#'+clickedContainer).fadeIn(500)});
		$('.current').removeClass('current');
		$('#'+clickedContainer).addClass('current');
	}
});

$('#nav-mobile li, ul.right.hide-on-med-and-down li').click(function(){
	var currentContainer = $('.current').attr('id');
	var clickedContainer = $(this).text();

	if (currentContainer === clickedContainer) {
	} 
	else { 
		$('div.container.current').fadeOut(500, function(){
			$('#'+clickedContainer).fadeIn(500)});
		$('.current').removeClass('current');
		$('#'+clickedContainer).addClass('current');
	}
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
	counter = counter + 1;
	$("#logo-container :last-child").text(" " + counter);	
});


