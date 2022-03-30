var elem = ""

for (let index = 0; index < 15; index++) {
    elem += `<div><img src="assets/images/gallery/` + (index + 1) + `.jpg" alt=""></div>`
}
$(".owl-carousel").html(elem);
var owlSlider = $('#owl-collections');
owlSlider.owlCarousel({
    navigation: true,
    nav: true,
    dots: false,
    dotsEach: 1,
    autoWidth: false,
    loop: true,
    navText : [ '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15 18.0423L9 12.0282L15 6.01416" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg> ', '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9 18L15 12L9 6" stroke="#F8F8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg> '],
    center: true,
    responsiveClass: true,
    margin: 0,
    items: 2,
    smartSpeed: 300,
    animateIn: 'ease-in-out',
    animateOut: 'ease-in-out',
    responsive: {
        480: {
            items: 3,
        },
        992: {
            slideBy: 3,
            items: 3
        }
    }
});

// Roadmap animation

$(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).height();
    var elementTop = $(".roadmap-flow").offset().top;
    var percentage = ((windowBottom - elementTop) / $(".roadmap-flow").height()) * 100;
    if(percentage >= 100) {
        if(percentage <= 105) {
            $('.roadmap-middle').css('height', (percentage - 5) + '%')
            $('.roadmap-end').css('height', (percentage - 5) + '%')
        } else {
            $('.roadmap-middle').css('height', (100) + '%')
            $('.roadmap-end').css('height', (100) + '%')
        }
    } else if(percentage > 5) {
        if(percentage <= 9 ) {
            $('.roadmap-middle').css('height', (4) + '%')
            $('.roadmap-end').css('height', (4) + '%')
        } else {
            $('.roadmap-middle').css('height', (percentage - 5) + '%')
            $('.roadmap-end').css('height', (percentage - 5) + '%')
        }
    }
    revealFlow(percentage)
})

function revealFlow(p) {
    $('.roadmap-body').each(function() {
        var position = $(this).position();
        var percentTop = position.top/$('.roadmap-flow').height()*100;
        if(p >= (parseFloat(percentTop) + 5)) {
            $(this).addClass('active');        
        }
        
        if(p <= (parseFloat(percentTop) + 5)) {
            $(this).removeClass('active');        
        }
    })
}