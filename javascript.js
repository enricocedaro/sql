const debounce = function(func, wait, immediate){
	let timeout;
	return function(...args){
		const context = this;
		const later = function(){
			timeout = null;
	if(!immediate) func.apply(context, args);
		};
	const callNow = immediate && !timeout;
	clearTimeout(timeout);
	timeout = setTimeout(later, wait);
	if(callNow) func.apply(context, args);
	};
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
	const windowTop = window.pageYOffset + ((window.innerHeight * 3.36) / 4);
	target.forEach(function(element){
		if ((windowTop) >element.offsetTop){
			element.classList.add(animationClass);
		}
		else{
			element.classList.remove(animationClass);
		}
	})
}

animeScroll();

if(target.length){
	window.addEventListener('scroll', debounce(function(){
		animeScroll();
	}, 
));
}

$(function(){
 
    $(document).on( 'scroll', function(){
 
        if ($(window).scrollTop() > 100) {
            $('.smoothscroll-top').addClass('show');
        } else {
            $('.smoothscroll-top').removeClass('show');
        }
    });
 
    $('.smoothscroll-top').on('click', scrollToTop);
});
 
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 600, 'linear').animate({scrollTop:25},200).animate({scrollTop:0},150) .animate({scrollTop:0},50);
}
