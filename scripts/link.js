$('.fa-square-github').click(() => {
    window.open("https://github.com/dinakar-i");
})
$('.fa-linkedin').click(() => {
    window.open("https://www.linkedin.com/in/dinakar-m-3b56531b9/");
})
$('.fa-instagram').click(() => {
    window.open("https://www.instagram.com/dinakar_i/");
})
$('.fa-envelope').click(() => {
    window.open("mailto:dinakar_i@yahoo.com");
})

// $(".aboutme-btn").click(function() {	
//     $('html,body').animate({
//             scrollTop: $(".aboutme-p").offset().top
//         },
//         'slow');
// });

$(document).ready(function() {
    $(".aboutme-btn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $("#er").offset().top
        }, 500);
    });
});
$(document).ready(function() {
    $(".project-btn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $(".card-holder").offset().top
        }, 500);
    });
});