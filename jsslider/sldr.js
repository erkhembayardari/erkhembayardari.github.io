var angle = 0;
var angleDelta = 90;
var transformBoxStr = '';
var transformSlideStr = '';

var $box = $('#sliderBox');
var $slides = $('.slide');

$('#prevSlider').on('click', function () {
	angle -= angleDelta;
	transformBoxStr = 'translateZ(-800px) rotateY(' + angle + 'deg)';
	$box.css('transform', transformBoxStr);

	rotateSlides();
})

$('#nextSlider').on('click', function () {
	angle += angleDelta;
	transformBoxStr = 'translateZ(-800px) rotateY(' + angle + 'deg)';
	$box.css('transform', transformBoxStr);

	rotateSlides();
})


function rotateSlides (newAngle) {
	var translateProps = [
	  'translateZ(1200px) translateX(0px)' + 'rotateY(' + (-angle) + 'deg)',
	  'translateZ(0px) translateX(1200px)' + 'rotateY(' + (-angle) + 'deg)',
		'translateZ(-1200px) translateX(0px)' + 'rotateY(' + (-angle) + 'deg)',
		'translateZ(0px) translateX(-1200px)' + 'rotateY(' + (-angle) + 'deg)'
	]

	var translateX = '';
	var translateZ = '';
	console.log(translateProps);
	$slides.each(function (index) {
		$(this).css('transform', translateProps[index]);
	})
}