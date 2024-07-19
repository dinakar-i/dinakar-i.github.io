$('.fa-square-github').click(() => {
    window.open("https://github.com/dinakar-i");
})
$('.fa-linkedin').click(() => {
    window.open("https://www.linkedin.com/in/dinakar-m-3b56531b9/");
})
$('.fa-instagram').click(() => {
    window.open("https://www.instagram.com/dinakar_i/");
})
$('.res-btn').click(() => {
    window.open("https://firebasestorage.googleapis.com/v0/b/projectx-77451.appspot.com/o/Soft-resume(dinakar)%20(1).pdf?alt=media&token=67c35672-1446-4eb7-a491-1062ad52adb7");
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
