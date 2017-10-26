$(function() { 
    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });


});
// mob menu
$(".top a").click(function (e) {
    e.preventDefault();
    $(".hide-mob").slideToggle();
});

$(".bot a").click(function (e) {
    e.preventDefault();
    $(".hide-mob2").slideToggle();
});

// to ckick lang menu dropdown in resize the <=800px
function windowSize() {
    if ($(window).width() <= '800') {
        //click lang menu top
        $(".wrapLang").click(function () {
            $(".dateLang__lang").slideToggle();
        });
    }
}

$(window).on('load resize', windowSize);