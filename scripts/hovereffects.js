$(".card-holder").hover(() => {
    console.log('woek');
    $(".getin-btn").css("background-color", '#0abb92');
    $(".img-text").css("color", '#0abb92');
}, () => {
    $(".getin-btn").css("background-color", 'white');
    $(".img-text").css("color", 'white');
    $(".getin-btn").css("transition", '0.7s');
    $(".img-text").css("transition", '0.7s');
})

// menu items

$(document).ready(function() {
    $(".btn-hover").hover(function() {
        $(this).css("background-color", "#0abb92");
        $(this).css("color", "black");
        $(this).css("transition", '0.5s');
    }, function() {
        $(this).css("background-color", "#121212");
        $(this).css("color", "white");
        $(this).css("transition", '0.5s');
    });
});